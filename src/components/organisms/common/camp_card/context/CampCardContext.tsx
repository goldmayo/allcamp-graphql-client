import { createContext, useContext } from "react";
import { CampInfo } from "@/types/campType";

const CampCardContext = createContext<CampInfo | null>(null);

export function useCampCardContext() {
  const context = useContext(CampCardContext);
  if (!context) {
    throw new Error("CampCard.* component must be rendered as child of CampCard component");
  }
  return context;
}

export default CampCardContext;
