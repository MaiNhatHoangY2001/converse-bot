import {Navigate, Route, Routes} from "react-router-dom";
import ForgotPasswordPage from "@pages/auth/forgot-password";
import LoginPage from "@pages/auth/login.tsx";
import RegisterPage from "@pages/auth/register.tsx";
import ResetPasswordPage from "@pages/auth/reset-password";
import VerifyEmail from "@pages/auth/verify-email";
import ErrorPage from "@pages/error-page.tsx";
import AboutPage from "@pages/landing-page/about/about-page.tsx";
import HomePage from "@pages/landing-page/home/home-page.tsx";
import Welcome from "@pages/welcome/welcome.tsx";

import LayoutAuth from "../layouts/layout-auth.tsx";

import PrivateRoute from "./private-route.tsx";
import PublicRoute from "./public-route.tsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={"auth/*"}>
        <Route path="welcome" element={<PublicRoute element={<Welcome />} />} />
        <Route path="login" element={<PublicRoute element={<LoginPage />} />} />
        <Route element={<LayoutAuth />}>
          <Route
            path="forgot-password"
            element={<PublicRoute element={<ForgotPasswordPage />} />}
          />
          <Route
            path="reset-password/:id"
            element={<PublicRoute element={<ResetPasswordPage />} />}
          />
          <Route
            path="verify-email/:email"
            element={<PublicRoute element={<VerifyEmail />} />}
          />
        </Route>

        <Route
          path="register"
          element={<PublicRoute element={<RegisterPage />} />}
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>

      {/* Private Routes */}
      <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
      <Route path="/about" element={<PrivateRoute element={<AboutPage />} />} />

      {/* Error Route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRoutes;
