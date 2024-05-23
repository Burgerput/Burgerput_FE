import { create } from "zustand";

const useSubmitStateStore = create((set) => ({
  loading: false,
  warning: false,
  success: false,
  result: false,

  actions: {
    handleWarning: (duration = 1000, warning = true) => {
      set({ warning });
      setTimeout(() => {
        set({ warning: false });
      }, duration);
    },

    handleSuccess: (duration = 1500) => {
      set({ success: true });
      setTimeout(() => {
        set({ success: false });
      }, duration);
    },

    setLoading: (loading) => set({ loading }),
    setResult: (result) => set({ result }),

    resetState: () =>
      set({
        loading: false,
        warning: false,
        success: false,
        result: false,
      }),
  },
}));

export const useWarning = () => useSubmitStateStore((state) => state.warning);
export const useHandleWaring = () =>
  useSubmitStateStore((state) => state.actions.handleWarning);

export const useSuccess = () => useSubmitStateStore((state) => state.success);
export const useHandleSuccess = () =>
  useSubmitStateStore((state) => state.actions.handleSuccess);

export const useLoading = () => useSubmitStateStore((state) => state.loading);
export const useSetLoading = () =>
  useSubmitStateStore((state) => state.actions.setLoading);

export const useResult = () => useSubmitStateStore((state) => state.result);
export const useSetResult = () =>
  useSubmitStateStore((state) => state.actions.setResult);

export const useResetState = () =>
  useSubmitStateStore((state) => state.actions.resetState);
