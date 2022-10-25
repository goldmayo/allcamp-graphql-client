import React, { createContext, Dispatch, useReducer } from "react";
import { detailedSearchParams } from "../types/searchFormType";

type field = keyof detailedSearchParams;

export const DetailedSearchParamsContext = React.createContext<detailedSearchParams | undefined>(undefined);

type Action =
  | { type: "SELECT"; name: field; params: string }
  | { type: "DELETE"; name: field; params: string }
  | { type: "RESET"; name: field; params: string };

type DetailedSearchDispatch = Dispatch<Action>;

export const DetailedSearchParamsDispatchContext = createContext<DetailedSearchDispatch | undefined>(undefined);

function DetailedSearchReducer(state: detailedSearchParams, action: Action) {
  // console.log(action);
  // console.log(state);

  switch (action.type) {
    case "SELECT":
      // return (state[action.name] = [...state[action.name], action.params]);
      return {
        ...state,
        [action.name]: [...state[action.name], action.params],

        // category : [...state[action.name], action.params],

        // state["region"]: [...state[action.name], action.params],
      };
    case "DELETE":
      // return (state[action.name] = state[action.name].filter((el) => el !== action.params));
      return {
        ...state,
        [action.name]: state[action.name].filter((el) => el !== action.params),
      };
    case "RESET":
      return {
        ...state,
        region: [],
        location: [],
        campsite: [],
        theme: [],
        facility: [],
        operation: [],
        floor: [],
        etcinfo: [],
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function DetailedSearchContextProvider({ children }: { children: React.ReactNode }) {
  const [detailedSearchParams, dispatch] = useReducer(DetailedSearchReducer, {
    region: [],
    location: [],
    campsite: [],
    theme: [],
    facility: [],
    operation: [],
    floor: [],
    etcinfo: [],
  });

  return (
    <DetailedSearchParamsDispatchContext.Provider value={dispatch}>
      <DetailedSearchParamsContext.Provider value={detailedSearchParams}>
        {children}
      </DetailedSearchParamsContext.Provider>
    </DetailedSearchParamsDispatchContext.Provider>
  );
}
