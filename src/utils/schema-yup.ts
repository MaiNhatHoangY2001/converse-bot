import {
  EMAIL_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
} from "@utils/regex-validate.ts";
import * as yup from "yup";

export const schemaYup = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .test("is-fname", "Invalid first name!", (value) => {
      return yup
        .string()
        .matches(NAME_REGEX, {
          excludeEmptyString: true,
        })
        .isValidSync(value);
    }),
  lastName: yup
    .string()
    .required("Last name is required")
    .test("is-lname", "Invalid last name!", (value) => {
      return yup
        .string()
        .matches(NAME_REGEX, {
          excludeEmptyString: true,
        })
        .isValidSync(value);
    }),
  email: yup
    .string()
    .required("Email is required")
    .test("is-email", "Invalid email! Example: user@example.com", (value) => {
      return yup
        .string()
        .matches(EMAIL_REGEX, {
          excludeEmptyString: true,
        })
        .isValidSync(value);
    }),
  password: yup
    .string()
    .required("Password is required")
    .test("is-length-pw", "Password at least 6 characters!", (value) => {
      return value.length >= 6;
    })
    .test("is-pw", "Invalid password! Example: @User123", (value) => {
      return yup
        .string()
        .matches(PASSWORD_REGEX, {
          excludeEmptyString: true,
        })
        .isValidSync(value);
    }),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), ""], "Confirm Password does not match!"),
  check: yup
    .boolean()
    .required(
      "Please agree to the Terms and Privacy Policies before proceeding",
    ),
});
export type SchemaYup = yup.InferType<typeof schemaYup>;
