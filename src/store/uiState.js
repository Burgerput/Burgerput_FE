import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

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
export const useSubmitStates = () =>
  useSubmitStateStore(
    useShallow(({ loading, warning, success, result }) => ({
      loading,
      warning,
      success,
      result,
    }))
  );

export const useSubmitActions = () =>
  useSubmitStateStore(
    useShallow(({ actions }) => ({
      handleWarning: actions.handleWarning,
      handleSuccess: actions.handleSuccess,
      setLoading: actions.setLoading,
      setResult: actions.setResult,
      resetState: actions.resetState,
    }))
  );
