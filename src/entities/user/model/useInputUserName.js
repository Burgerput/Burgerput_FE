import { useForm } from "react-hook-form";
import { notifyUserEntry } from "../api";
import { useSetUserName } from "./store";
import { socket } from "../../socket";

export function useInputUserName() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const setUserName = useSetUserName();

  const onSubmit = async (data) => {
    setUserName(data.userName);
    const res = await notifyUserEntry(data.userName);

    if (res.status === 200) {
      socket.connect();
    }
  };

  return { register, handleSubmit, errors, onSubmit };
}
