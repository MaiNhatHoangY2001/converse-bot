import {Navigate, Route, Routes} from "react-router-dom";
import Login from "@pages/auth/Login.tsx";
import Register from "@pages/auth/Register.tsx";
import Home from "@pages/Home/Home.tsx";
import About from "@pages/About/About.tsx";
import ErrorPage from "@components/common/ErrorPage.tsx";
import PublicRoute from "./PublicRoute.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={"auth/*"}>
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
  );
}

export default AppRoutes;
