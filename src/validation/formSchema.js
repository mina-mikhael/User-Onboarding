import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup.string().trim().required("First Name is required").min(3, "First Name must be 3 or more characters"),

  last_name: yup.string().trim().required("Last Name is required").min(3, "Last Name must be 3 or more characters"),

  password: yup
    .string()
    .required("Password required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  email: yup.string().email("Must be a valid email address").required("Email Address is required"),

  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
});

export default formSchema;
