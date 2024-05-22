import React, {useTransition} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import ErrorPage from "../components/common/ErrorPage";
import LoadingPage from "../components/common/LoadingPage";
import PublicLayout from "../layouts/PublicLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import {Register} from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRoutes() {
  const [isPending, startTransition] = useTransition();
  const location = useLocation();

  React.useEffect(() => {
    startTransition(() => {});
  }, [location.pathname]);

  return (
    <>
      {isPending && <LoadingPage />}
      <Routes>
        {/* Public Routes */}
        <Route path="/auth/*" element={<PublicLayout />}>
          <Route path="login" element={<PublicRoute element={<Login />} />} />
          <Route
            path="register"
            element={<PublicRoute element={<Register />} />}
          />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Route>

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} />} />

        {/* Error Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
