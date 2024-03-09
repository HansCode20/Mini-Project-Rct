import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image2 from "../assets/Image2.jpg";
import google from "../assets/google.svg";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setNotif("Login Success");
        console.log(res);
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        setTimeout(() => {
          navigate("/listuser");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        setNotif(
          err?.response?.data?.error || "An error occurred during login"
        );
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Welcome back</span>
            <span className="text-gray-800 mb-8">
              Welcome back! Please enter your details
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                onChange={handlePasswordChange}
                value={password}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <span className="font-bold text-md">Forgot password</span>
            </div>
            <button
              disabled={loading}
              onClick={handleLogin}
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
              Sign in with Google
            </button>
            <div className="text-center text-gray-400">
              Don't have an account?
              <span className="font-bold text-black"> Sign up for free</span>
            </div>
            {/* Notif */}
            {notif && <p className="text-blue-500">{notif}</p>}
          </div>
          <div className="relative">
            <img
              src={image2}
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
            <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
              <span className="text-white text-xl">
                We've been using Untitle to kick start every new project and
                can't imagine working without it.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
