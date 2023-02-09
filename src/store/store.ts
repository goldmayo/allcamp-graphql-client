import { AdvancedSearchParamsInterface } from "@/types/searchFormType";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchParamsStore {
  AdvancedSearchParams: AdvancedSearchParamsInterface;
  setSearchParams: (name: string, value: string) => void;
  selectSearchParams: (name: string, value: string) => void;
  deleteSearchParams: (name: string, value: string) => void;
  resetSearchParams: (name: string, value: string) => void;
}

const InitialAdvancedSearchParams: AdvancedSearchParamsInterface = {
  region: [],
  campsite: [],
  location: [],
  theme: [],
  facility: [],
  operation: [],
  floor: [],
  etcinfo: [],
};

const useSearchParamsStore = create<SearchParamsStore>((set) => ({
  AdvancedSearchParams: InitialAdvancedSearchParams,
  setSearchParams: (name, value) =>
    set((state) => ({ AdvancedSearchParams: { ...state.AdvancedSearchParams, [name]: [value] } })),
  selectSearchParams: (name, value) =>
    set((state) => ({
      AdvancedSearchParams: { ...state.AdvancedSearchParams, [name]: [...state.AdvancedSearchParams[name], value] },
    })),
  deleteSearchParams: (name, value) =>
    set((state) => ({
      AdvancedSearchParams: {
        ...state.AdvancedSearchParams,
        [name]: state.AdvancedSearchParams[name].filter((el) => el != value),
      },
    })),
  resetSearchParams: () => set((state) => ({ AdvancedSearchParams: { ...InitialAdvancedSearchParams } })),
}));
