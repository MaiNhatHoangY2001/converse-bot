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

export const converseStorageUrl: string = import.meta.env.VITE_BASE_S3_URL;

export const IMAGES = {
  logo: `${converseStorageUrl}/logo-conversebot.png`,
  voice: `${converseStorageUrl}/voice.gif`,
  speakWithAI: `${converseStorageUrl}/speak-with-AI.png`,
  fstTimeLogin: `${converseStorageUrl}/first-time-login-img.png`,
  bannerLogin: `${converseStorageUrl}/img-login.png`,
};

export const END_TIME = 60 * 5;

export const ROUTER = {
  auth: {
    register: "/auth/register",
  },
};
