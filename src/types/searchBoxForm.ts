export interface SearchBoxFormInterface {
  [index: string]: string;
  keyword: string;
  doName: string;
  sigunguName: string;
  campTheme: string;
}

export interface CategoryCheckBoxInterface {
  content: { id: string; name: string }[];
  id: string;
  title: string;
  name: string;
  className: string;
  warningMsg?: string;
}

export interface AdvancedSearchFormInterface {
  region: CategoryCheckBoxInterface;
  operation: CategoryCheckBoxInterface;
  location: CategoryCheckBoxInterface;
  campsite: CategoryCheckBoxInterface;
  floor: CategoryCheckBoxInterface;
  theme: CategoryCheckBoxInterface;
  facility: CategoryCheckBoxInterface;
  etcinfo: CategoryCheckBoxInterface;
}
