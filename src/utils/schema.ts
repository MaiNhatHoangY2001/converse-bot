// Form Login
import {z} from "zod";

// const Email = z.string().email().trim();
// const Password = z
//   .string()
//   .min(8, {message: "Password must be at least 8 characters long"})
//   .refine(value => !/\s/.test(value), {
//     message: "Password must not contain any whitespace characters",
//   })
//   .refine(value => /[a-z]/.test(value), {
//     message: "Password must contain at least one lowercase letter",
//   })
//   .refine(value => /[A-Z]/.test(value), {
//     message: "Password must contain at least one uppercase letter",
//   })
//   .refine(value => /\d/.test(value), {
//     message: "Password must contain at least one number",
//   })
//   .refine(value => /[@$!%*?&]/.test(value), {
//     message: "Password must contain at least one special character",
//   });

export const LoginSchema = z
  .object({
    email: z.string().min(1, "email is required"),
    password: z.string().min(1, "password is required"),
  })
  .required();
export type LoginType = z.infer<typeof LoginSchema>;
