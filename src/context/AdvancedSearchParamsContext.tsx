import React from "react";
import createFastContext from "../utils/createFastContext";
import { AdvancedSearchParams } from "../core/store/advancedSearchParams";

const InitialAdvancedSearchParams = AdvancedSearchParams;
const { Provider, useStore } = createFastContext(InitialAdvancedSearchParams);

export const useAdvancedSearchParams = useStore;

export function AdvancedSearchParamsContextProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}
