// TODO: Button Logout
import {useNavigate} from "react-router-dom";

const ButtonLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

function HomePage() {
  return (
    <div>
      <ButtonLogout />
    </div>
  );
}

export default HomePage;
