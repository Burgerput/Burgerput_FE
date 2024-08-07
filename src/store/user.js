import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: "",
  actions: {
    setUserName: (userName) => set({ userName }),
  },
}));

export const useUserName = () => useUserStore((state) => state.userName);
export const useSetUserName = () =>
  useUserStore((state) => state.actions.setUserName);
