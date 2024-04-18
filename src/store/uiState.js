import { create } from "zustand";

const useSubmitStateStore = create((set) => ({
  loading: false,
  warning: false,
  success: false,
  result: false,

  actions: {
    handleWarning: (duration = 1500) => {
      set({ warning: true });
      setTimeout(() => {
        set({ warning: false });
      }, duration);
    },

    handleSuccess: (duration = 3000) => {
      set({ success: true });
      setTimeout(() => {
        set({ success: false });
      }, duration);
    },

    setLoading: (loading) => set({ loading }),
    setResult: (result) => set({ result }),
  },
}));

export const useWarning = () => useSubmitStateStore((state) => state.warning);
export const useHandleWaring = () =>
  useSubmitStateStore((state) => state.actions.handleWarning);

export const useSuccess = () => useSubmitStateStore((state) => state.success);
export const useHandleSuccess = () =>
  useSubmitStateStore((state) =>
    useSubmitStateStore(state.actions.handleSuccess)
  );

export const useLoading = () => useSubmitStateStore((state) => state.loading);
export const useSetLoading = () =>
  useSubmitStateStore((state) => state.actions.setLoading);

export const useResult = () => useSubmitStateStore((state) => state.result);
export const useSetResult = () =>
  useSubmitStateStore((state) => state.actions.setResult);
