import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import gif from "../assets/ilustrator.gif";

const Home = () => {
  const access_token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div>
      <Layout>
        <div className="bg-white">
          <div className="relative isolate overflow-hidden ">
            <div className="flex items-center justify-center flex-col lg:flex-row  ">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start Learning Dev Now.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Embark on the journey of learning Dev now and unlock your
                  limitless potential. Every line of code is a step towards
                  mastery, every bug fixed is a victory, and every project
                  completed is a testament to your growth. Embrace the
                  challenges, celebrate the victories, and never cease to
                  innovate.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <div className="flex gap-4  ">
                    {access_token ? (
                      <button
                        onClick={logout}
                        className="px-3 py-2 text-white bg-black rounded-lg"
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <Link
                          to={"/register"}
                          className="px-3 py-2 rounded-lg  bg-black text-white hover:bg-gray-500 hover:text-white"
                        >
                          Register
                        </Link>
                        <Link to={"/login"} className="px-3 py-2 text-black ">
                          Login <span>→</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <img src={gif} alt="App screenshot" width={720} height={140} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
