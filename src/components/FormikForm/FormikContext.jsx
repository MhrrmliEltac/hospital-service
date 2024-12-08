import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, setSubmitted } from "../redux/slice/formikSlice";
import SubForm from "./SubForm";
import { useState } from "react";

const FormikContext = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const isSubmitted = useSelector((state) => state.form.submitted);
  const formDataAll = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleSubmit = (formDataItem) => {
    dispatch(submitForm(formDataItem));
    alert("Müraciətiniz qəbul edildi");
  };

  useEffect(() => {
    if (isSubmitted) {
      handleSubmit(formData);
      dispatch(setSubmitted(false));
    }
  }, [isSubmitted, formDataAll, dispatch]);

  const validate = (values) => {
    setFormData(values);
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.surname) errors.surname = "Surname is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone is invalid";
    }
    return errors;
  };

  return (
    <div className="flex w-[90%]">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          phone: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <SubForm
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </Formik>
    </div>
  );
};

export default FormikContext;
