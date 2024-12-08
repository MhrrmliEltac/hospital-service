import React from "react";
import { styled } from "@mui/system";
import { FormControl, FormGroup, FormLabel } from "@mui/material";
import { Input, inputClasses } from "@mui/base/Input";

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
const StyledInput = styled(Input)(
  ({ theme }) => `
  .${inputClasses.input} {
    width: 350px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 10px 6px;
    border-radius: 5px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
    outline: none;
    transition: width 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
);

const StyledLabel = styled(FormLabel)(
  ({ theme }) => `
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  span{
  color:red;
  }
  `
);
const StyledFormControl = styled(FormControl)(
  ({ theme }) => `
  margin-bottom: 1rem;
  `
);
const StyledFormGroup = styled(FormGroup)(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  `
);

const SubForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {

  return (
    <form
      className="flex flex-row flex-wrap lg:gap-5 gap-1 w-[100%] justify-between"
      onSubmit={handleSubmit}
    >
      <StyledFormGroup>
        <StyledFormControl defaultValue="" required>
          <StyledLabel>First name</StyledLabel>
          <StyledInput
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.name}
            </div>
          )}
        </StyledFormControl>
        <StyledFormControl defaultValue="" required>
          <StyledLabel>Last name</StyledLabel>
          <StyledInput
            type="text"
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
          />
          {errors.surname && touched.surname && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.surname}
            </div>
          )}
        </StyledFormControl>

        <StyledFormControl defaultValue="" required>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.email}
            </div>
          )}
        </StyledFormControl>
        <StyledFormControl defaultValue="" required>
          <StyledLabel>Phone</StyledLabel>
          <StyledInput
            type="text"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && (
            <div style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.phone}
            </div>
          )}
        </StyledFormControl>
      </StyledFormGroup>
    </form>
  );
};

export default SubForm;
