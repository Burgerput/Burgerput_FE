import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addManager,
  deleteManger,
  getAccounts,
  getManagerList,
  submitAccounts,
} from "../api/Managers";

const queriesToInvalidate = [
  "managers",
  "customMachines",
  "customMachinesTemp",
  "customFoods",
  "customFoodsTemp",
];

export function useAdminProfile() {
  const queryClient = useQueryClient();
  const accountsQuery = useQuery(["accounts"], () => getAccounts(), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const submit = useMutation(
    ({ data }) =>
      submitAccounts({
        zenputId: data.email,
        rbiId: data.id,
        rbiPw: data.password,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["accounts"]);
      },
    }
  );

  return { accountsQuery, submit };
}
