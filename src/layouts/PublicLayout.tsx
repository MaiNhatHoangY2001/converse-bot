import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/auth/Login";
import {Register} from "../pages/auth/Register";

export default function PublicLayout() {
  return (
    <div>
      <h1>Public Pages</h1>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </div>
  );
}
