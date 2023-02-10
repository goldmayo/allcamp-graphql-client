import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { SearchParamsSlice, createSearchParamSlice } from "./slice/searchParam";

//SearchParamsSlice & new Slice interface
type State = SearchParamsSlice;

const useStore = create<State>()(
  devtools((...a) => ({
    ...createSearchParamSlice(...a),
  }))
);

export default useStore;
