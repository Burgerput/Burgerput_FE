import React from "react";
import styles from "./styles.module.css";
import { EditAdminForm } from "../../widgets/edit-admin-form";
import { useSubmitActions, useSubmitStates } from "../../entities/ui-state";
import { useEditAdminProfile } from "../../entities/manager";
import { Banner } from "../../shared/ui/Banner";
import { BarSpinner } from "../../shared/ui/LoadingSpinner";

export default function EditAdminProfile() {
  const {
    accountsQuery: { isLoading, data: accounts },
    submit,
  } = useEditAdminProfile();

  const { success } = useSubmitStates();
  const { handleSuccess } = useSubmitActions();

  const onSubmit = (data) => {
    submit.mutate({ data }, { onSuccess: handleSuccess });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>관리자 정보 입력</h2>
      {success && <Banner text={"계정 저장이 완료되었습니다."} />}
      {isLoading && <BarSpinner />}
      {accounts && <EditAdminForm onSubmit={onSubmit} accounts={accounts} />}
    </section>
  );
}
