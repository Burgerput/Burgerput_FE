import { useNavigate, useOutletContext } from "react-router-dom";
import { useResetState } from "../store/uiState";

export function useGoHome() {
  const { handleHidden } = useOutletContext();
  const handleResetState = useResetState();
  const navigate = useNavigate();

  const handleClick = () => {
    handleResetState();
    handleHidden();
    navigate("/");
  };

  return { handleClick };
}
