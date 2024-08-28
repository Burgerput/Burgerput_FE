import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: "",
  userId: "",
  actions: {
    setUserName: (userName) => set({ userName }),
    setUserId: (userId) => set({ userId }),
  },
}));

export const useUserName = () => useUserStore((state) => state.userName);
export const useSetUserName = () =>
  useUserStore((state) => state.actions.setUserName);

export const useUserId = () => useUserStore((state) => state.userId);
export const useSetUserId = () =>
  useUserStore((state) => state.actions.setUserId);
