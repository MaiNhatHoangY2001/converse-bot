import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/auth/Login";
import {Register} from "../pages/auth/Register";
import Welcome from "../pages/auth/Welcome";

export default function PublicLayout() {
  return (
    <div>
      {/* <h1>Public Pages</h1> */}
      <Routes>
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="*" element={<Navigate to="/auth/login" />} /> */}
        <Route path="*" element={<Navigate to="/auth/welcome" />} />
      </Routes>
    </div>
  );
}
