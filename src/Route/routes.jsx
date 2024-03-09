import Home from "../pages/Home";
import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const routeList = [
  { path: "/", 
  element: <Home /> 
},
  { path: "/listuser", 
  element: (
    <ProtectedRoutes>
      <ListUser /> 
      </ProtectedRoutes>
  ),
  },
  { path: "/login", element: <Login /> }
];

export default routeList;
