export interface SearchBoxFormInterface {
  [index: string]: string;
  keyword: string;
  doName: string;
  sigunguName: string;
  campTheme: string;
}

export interface CategoryCheckBoxInterface {
  content: { id: string; name: string; value: string }[];
  id: string;
  title: string;
  name: string;
  className: string;
  warningMsg?: string;
}

export interface AdvancedSearchFormInterface {
  region: CategoryCheckBoxInterface;
  location: CategoryCheckBoxInterface;
  campsite: CategoryCheckBoxInterface;
  theme: CategoryCheckBoxInterface;
  facility: CategoryCheckBoxInterface;
  operation: CategoryCheckBoxInterface;
  floor: CategoryCheckBoxInterface;
  etcinfo: CategoryCheckBoxInterface;
}

export interface AdvancedSearchParamsInterface {
  [index: string]: string[];
  region: string[];
  location: string[];
  campsite: string[];
  theme: string[];
  facility: string[];
  operation: string[];
  floor: string[];
  etcinfo: string[];
}

export type CategoryName = keyof AdvancedSearchFormInterface;
export type Category = {
  [index in CategoryName]: string;
};
