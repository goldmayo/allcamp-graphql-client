export type SelectBoxOptionsData = {
  id: string;
  value: string;
};

export type SelectBoxData = {
  id: string;
  options: SelectBoxOptionsData[];
  labelText: string;
  name: string;
};
