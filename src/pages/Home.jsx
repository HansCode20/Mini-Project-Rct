import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const Home = () => {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate(); // Corrected: Added parentheses to useNavigate

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div>
      <Layout >
      {access_token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
      <h1>Ini halaman utama</h1>
      </Layout>
    </div>
  );
};

export default Home;
