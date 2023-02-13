import { AdvancedSearchParamsInterface } from "@/types/searchFormType";
import { StateCreator } from "zustand";

export interface SearchParamsSlice {
  AdvancedSearchParams: AdvancedSearchParamsInterface;
  setSearchParams: (name: string, value: string) => void;
  selectSearchParams: (name: string, value: string) => void;
  deleteSearchParams: (name: string, value: string) => void;
  resetSearchParams: () => void;
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

export const createSearchParamSlice: StateCreator<SearchParamsSlice> = (set) => ({
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
});
