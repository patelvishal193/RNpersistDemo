import * as Yup from 'yup';

const onlyDigits = /^\d+$/;
const decimals = /^[1-9]\d*(\.\d+)?$/;
const addUserSchema = Yup.object({
  first_name: Yup.string().required("Required field is empty"),
  last_name: Yup.string().required("Required field is empty"),
  email: Yup.string()
  .email("Please enter a valid email address")
  .required("Required field is empty")
  .trim(),
});

export {
  addUserSchema,
};
