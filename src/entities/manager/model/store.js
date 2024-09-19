import { create } from "zustand";

const useManagerStateStore = create((set) => ({
  manager: null,
  actions: {
    setManager: (manager) => set({ manager }),
  },
}));

export const useManagerState = () =>
  useManagerStateStore((state) => state.manager);
export const useSetManager = () =>
  useManagerStateStore((state) => state.actions.setManager);
