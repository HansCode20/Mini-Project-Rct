import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import image from "../assets/image.jpg";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const Register = () => {
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

  const handleRegister = () => {
    const payload = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res);
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        removeTokenFromLocalStorage();
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        toast.success("Register Success");
      })
      .catch((err) => {
        console.log(err.response);
        setNotif(err.response.data.error);
        setLoading(false);
        if (!email && !password) {
          toast.error("please fill in your email and password");
        } else if (!email) {
          toast.error("please fill in your email");
        } else if (!password) {
          toast.error("please fill in your password");
        } else if (err.response && err.response.status == 400) {
          toast.error("email already exist");
        }
      });
  };

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="relative">
            <img
              src={image}
              alt="img"
              className="w-[450px] h-full hidden rounded-xl md:block object-cover"
            />
            <div className="absolute hidden  bottom-10 right-6 p-6 bg-white bg-opacity-40  backdrop-blur-sm rounded drop-shadow-lg md:block">
              <span className="text-white text-xl">
                We've been using Untitle to kick start every new project and
                can't imagine working without it.
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Sign Up</span>
            <span className="text-gray-800 mb-8">
              Welcome! Please enter your details
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
                autoComplete="new-password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember Me</span>
              </div>
            </div>
            <div className="mb-4">
              <input type="checkbox" name="ch" id="ch" />
              <span className="text-md">
                {" "}
                I agree to the terms and conditions
              </span>
            </div>
            <button
              disabled={loading}
              onClick={handleRegister}
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
              Sign up with Google
            </button>
            <div className="text-center text-gray-400">
              You have an account?
              <span className="font-bold text-black"> Login</span>
            </div>
            {/* Notif */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
