import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Spotlight from "../fragments/ButtonWrapper.jsx";

const ListUser = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsersData = (page) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersData(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage === 2) {
      return;
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center bg-cover mt-[70px]">
        {user.map((item, index) => (
          <div key={index} className="rounded-lg bg-black p-4 mx-2 sm:mx-4">
            <img
              src={item.avatar}
              alt={`Avatar of ${item.first_name} ${item.last_name}`}
              className="w-24 mx-auto h-24 rounded-full"
            />
            <p className="text-white text-center mt-5 mb-[40px]  ">ADMIN</p>
            <Link to={`/listuser/${item.id}`}>
              <Spotlight />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[50px] mb-[20px]">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ListUser;
