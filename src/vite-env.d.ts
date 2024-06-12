/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_BASE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace APIAuth {
  interface Error {
    status: number;
    message: string;
    code: number;
  }

  declare namespace Login {
    interface RequestPayload {
      email: string;
      password: string;
    }

    interface Data {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      token: string;
    }

    interface Response {
      status: number;
      message: string;
      data: Data;
      code: number;
    }
  }

  declare namespace ForgotPassword {
    interface RequestPayload {
      email: string;
    }

    interface Response {
      status: number;
      message: string;
    }
  }

  declare namespace ResetPassword {
    interface RequestPayload {
      password: string;
      token: string;
    }

    interface Response {
      status: number;
      message: string;
    }
  }

  declare namespace ResendOTP {
    interface RequestPayload {
      email: string;
    }

    interface Response {
      status: number;
      message: string;
    }
  }

  declare namespace VerifyEmail {
    interface RequestPayload {
      email: string;
      otp: string;
    }

    interface Response {
      status: number;
      message: string;
    }

    interface ErrorVerifyEmail {
      status: number;
      message: string;
      data: DataError[];
    }

    interface DataError {
      type: string;
      msg: string;
      path: string;
      location: string;
    }
  }
}
