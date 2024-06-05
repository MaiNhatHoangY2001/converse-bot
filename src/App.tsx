import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./layouts/Layout";
import AppRoutes from "./routers/AppRoutes";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
