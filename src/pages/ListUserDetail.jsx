import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ListUserDetail = () => {
  const { id } = useParams();
  console.log("ID:", id); // Log ID di sini

  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUserDetail = () => {
      axios
        .get(`https://reqres.in/api/users/${id}`)
        .then((response) => {
          setUser(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching user detail:", error);
        });
    };

    getUserDetail();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <div className="p-6 sm:p-10">
          <div className="flex gap-4">
            <img
              src={user.avatar}
              alt="alt={`Avatar of ${item.first_name} ${item.last_name}`}"
              className="rounded-full w-24 h-24 sm:mt-0 mt-4"
            />
            <h3 className="text-base font-semibold leading-7 text-gray-900 mt-[30px] ">
              User Information
              <span className="mt-1 block text-sm leading-6 text-gray-600">
                Personal Detail Information
              </span>
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user.first_name} {user.last_name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Job
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Admin IT
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Salary
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  -
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Link to={"/listuser"}>
          <button className="flex  ml-auto  bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mr-5   rounded ">
            Back to List User
          </button>
        </Link>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ListUserDetail;
