import { useSetResult } from "../store/uiState";

export function useModal() {
  const setResult = useSetResult();

  const close = () => {
    setResult(false);
  };

  const confirm = () => {
    setResult(false);
  };

  return { close, confirm };
}
