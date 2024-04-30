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

export function useEditManagers() {
  const queryClient = useQueryClient();
  const managersQuery = useQuery(["managers"], () => getManagerList(), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const invalidateManagerQueries = () => {
    queriesToInvalidate.forEach((query) =>
      queryClient.invalidateQueries([query])
    );
  };

  const addMgr = useMutation(
    ({ manager }) => addManager([{ mgrname: manager }]),
    {
      onSuccess: invalidateManagerQueries,
    }
  );

  const delMgr = useMutation(
    ({ id, manager }) => deleteManger([{ id, mgrname: manager }]),
    {
      onSuccess: invalidateManagerQueries,
    }
  );

  return { managersQuery, addMgr, delMgr };
}

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
