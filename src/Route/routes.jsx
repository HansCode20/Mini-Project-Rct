import Home from "../pages/Home";
import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "../pages/Register";
import ListUserDetail from "../pages/ListUserDetail";
import SingleUser from "../pages/SingleUser";

const routeList = [
  { path: "/", element: <Home /> },
  {
    path: "/listuser",
    element: (
      <ProtectedRoutes>
        <ListUser />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/listuser/:id",
    element: (
      <ProtectedRoutes>
        <ListUserDetail />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/singleuser",
    element: (
      <ProtectedRoutes>
        <SingleUser />
      </ProtectedRoutes>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default routeList;
