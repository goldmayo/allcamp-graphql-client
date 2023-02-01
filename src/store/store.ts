import { create } from "zustand";

interface Store {
  items: { id: number; name: string }[];
}

const initialState: Store = {
  items: [],
};
