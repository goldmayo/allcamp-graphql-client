import React, { useRef, createContext, useContext, useCallback, useSyncExternalStore } from "react";

export default function createFastContext<Store>(initialState: Store) {
  type Action =
    | { type: "SET"; name: keyof Store; params: string }
    | { type: "SELECT"; name: keyof Store; params: string }
    | { type: "DELETE"; name: keyof Store; params: string }
    | { type: "RESET"; params: Store };

  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    dispatch: (action: Action, value?: Partial<Store>) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);

    const dispatch = useCallback((action: Action, value?: Partial<Store>) => {
      switch (action.type) {
        case "SET":
          store.current = {
            ...store.current,
            // @ts-ignore
            [action.name]: [action.params],
          };
          break;
        case "SELECT":
          store.current = {
            ...store.current,
            // @ts-ignore
            [action.name]: [...store.current[action.name], action.params],
          };
          break;
        case "DELETE":
          store.current = {
            ...store.current,
            // @ts-ignore
            [action.name]: store.current[action.name].filter((el) => el !== action.params),
          };
          break;
        case "RESET":
          store.current = {
            ...store.current,
            ...initialState,
          };
          break;
        default:
          throw new Error("Unhandled action");
      }
      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      dispatch,
      subscribe,
    };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    return <StoreContext.Provider value={useStoreData()}>{children}</StoreContext.Provider>;
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, (action: Action, value?: Partial<Store>) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error("Store not found");
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState)
    );

    return [state, store.dispatch];
  }

  return {
    Provider,
    useStore,
  };
}
