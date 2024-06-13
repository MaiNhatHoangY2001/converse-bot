/* eslint-disable @typescript-eslint/no-unused-expressions */
import.meta.env;

export const HEADER_FORGOT_PASSWORD = {
  title: "Forgot your password?",
  subTitle:
    "Don’t worry, happens to all of us. Enter your email below to recover your password",
};

export const HEADER_RESET_PASSWORD = {
  title: "Set a password",
  subTitle:
    "Your previous password has been rested. Please set a new password for your account.",
};

export const HEADER_VERIFY_EMAIL = {
  title: "Verify code",
  subTitle: "An authentication code has been sent to your email.",
};

export const converseStorageUrl: string =
  "https://converse-storage.s3.ap-southeast-1.amazonaws.com";
export const IMAGES = {
  logo: `${converseStorageUrl}/logo-conversebot.png`,
  voice: `${converseStorageUrl}/voice.gif`,
  speakWithAI: `${converseStorageUrl}/speak-with-AI.png`,
  fstTimeLogin: `${converseStorageUrl}/first-time-login-img.png`,
};

export const END_TIME = 60 * 5;
