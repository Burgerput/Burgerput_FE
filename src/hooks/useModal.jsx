import { useSubmitActions } from "../store/uiState";

export function useModal() {
  const { setResult } = useSubmitActions();

  const close = () => {
    setResult(false);
  };

  const confirm = () => {
    setResult(false);
  };

  return { close, confirm };
}
