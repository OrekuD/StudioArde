import { create } from "zustand";

type CursorType = "default" | "link" | "button";

type CursorStore = {
  type: CursorType;
  setCursorType: (type: CursorType) => void;
};

const useCursorStore = create<CursorStore>((set) => ({
  type: "default",
  setCursorType: (type: CursorType) => set({ type }),
}));

export default useCursorStore;
