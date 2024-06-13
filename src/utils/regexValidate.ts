export const NAME_REGEX = /^[a-zA-Z\s]+$/u; // Matches one or more alphabetic chars (both lowercase and uppercase) or space chars
export const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // example@example.com or user@expample.com.vn
export const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,50}$/; // At least 1 num (0-9), 1 lowercase and uppercase letter, 1 special char, no space, minimum 6 chars
