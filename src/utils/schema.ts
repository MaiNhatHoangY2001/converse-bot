// Form Login
import {z} from "zod";

const EmailSchema = z.string().email().min(1, "Email is required").trim();
const Password = z
  .string()
  .min(8, {message: "Password must be at least 8 characters long"})
  .refine(value => !/\s/.test(value), {
    message: "Password must not contain any whitespace characters",
  })
  .refine(value => /[a-z]/.test(value), {
    message: "Password must contain at least one lowercase letter",
  })
  .refine(value => /[A-Z]/.test(value), {
    message: "Password must contain at least one uppercase letter",
  })
  .refine(value => /\d/.test(value), {
    message: "Password must contain at least one number",
  })
  .refine(value => /[@$!%*?&]/.test(value), {
    message: "Password must contain at least one special character",
  });

// Schema Login
export const LoginSchema = z
  .object({
    email: EmailSchema,
    password: z.string().min(1, "password is required"),
  })
  .required();
export type LoginType = z.infer<typeof LoginSchema>;

// Schema Send Email
export const SendEmailSchema = z.object({
  email: EmailSchema,
});
export type SendEmailType = z.infer<typeof SendEmailSchema>;

// Schema reset-password
export const ResetPasswordSchema = z
  .object({
    newPassword: Password,
    confirmPassword: z.string(),
  })
  .refine(value => value.newPassword === value.confirmPassword, {
    message: "Password must match confirm password",
    path: ["confirmPassword"],
  });
export type ResetPasswordType = z.infer<typeof ResetPasswordSchema>;

export const VerifyEmailSchema = z.object({
  otp: z.string().min(6, "OTP invalid").max(6, "OTP invalid"),
});
export type VerifyEmailType = z.infer<typeof VerifyEmailSchema>;
