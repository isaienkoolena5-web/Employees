import { useContext } from "react";

import { Card, Field, Label, PageWrapper, Value } from "./styles";
import { EmployeeLayoutContext } from "../../components/EmployeeLayout/EmployeeLayout";

export const Employee = () => {
  const { employeeData } = useContext(EmployeeLayoutContext);

  if (!employeeData) {
    return (
      <PageWrapper>
        <Card>
          <Label>No employee data</Label>
        </Card>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Card>
        <Field>
          <Label>Name</Label>
          <Value>{employeeData?.name}</Value>
        </Field>
        <Field>
          <Label>Surname</Label>
          <Value>{employeeData?.surname}</Value>
        </Field>
        <Field>
          <Label>Age</Label>
          <Value>{employeeData?.age}</Value>
        </Field>
        <Field>
          <Label>Job Position</Label>
          <Value>{employeeData?.jobPosition || "-"}</Value>
        </Field>
      </Card>
    </PageWrapper>
  );
};
