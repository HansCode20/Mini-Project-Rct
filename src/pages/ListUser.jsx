import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [user, setUser] = useState([]);

  const getUsersData = () => {
    axios
      .all([
        axios.get("https://reqres.in/api/users?page=1"),
        axios.get("https://reqres.in/api/users?page=2"),
      ])
      .then((res) => {
        const data1 = res[0].data.data;
        const data2 = res[1].data.data;
        setUser([...data1, ...data2]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  console.log(user);

  return (
    <div className="flex">
      <Navbar />
      <div className="grid grid-cols-4 gap-4 h-[100vh] flex justify-center items-center bg-cover">
        {user.map((item, index) => (
          <div key={index}>
            <h1>{item.email}</h1>
            <img
              src={item.avatar}
              alt={`Avatar of ${item.first_name} ${item.last_name}`}
            />
            <div className="flex gap-2">
              <h2>{item.first_name}</h2>
              <h2>{item.last_name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ListUser;
