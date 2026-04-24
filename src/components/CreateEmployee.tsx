import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FormContainer, FormComponent, MainWrapper } from "./styles";
import type { CreateEmployeeValues } from "./types";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { EmployeeLayoutContext } from "../../components/EmployeeLayout/EmployeeLayout";

function CreateEmployee() {
  const employeeContext = useContext(EmployeeLayoutContext);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Field name is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    surname: Yup.string()
      .required("Field surname is required")
      .max(15, "Max 15 symbols"),
    age: Yup.number()
      .required("Field age is required")
      .typeError("Value age must be number")
      .min(18, "Min age 18")
      .max(80, "Max age 80"),
    jobPosition: Yup.string().max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    } as CreateEmployeeValues,

    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: CreateEmployeeValues) => {
      employeeContext?.setEmployeeData(values)
    },
  });

  return (
    <MainWrapper>
      <FormContainer>
        <FormComponent onSubmit={formik.handleSubmit}>
          <Input
            name="name"
            label="Name*"
            placeholder="Enter name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />

          <Input
            name="surname"
            label="Surname*"
            placeholder="Enter surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.errors.surname}
          />

          <Input
            name="age"
            label="Age*"
            placeholder="Enter age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.errors.age}
          />

          <Input
            name="jobPosition"
            label="Job Position"
            placeholder="Enter job position"
            value={formik.values.jobPosition}
            onChange={formik.handleChange}
            error={formik.errors.jobPosition}
          />

          <Button name="CREATE" type="submit" />
        </FormComponent>
      </FormContainer>
    </MainWrapper>
  );
}

export default CreateEmployee;
