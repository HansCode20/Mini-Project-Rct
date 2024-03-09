import Home from "../pages/Home";
import ListUser from "../pages/ListUser";
import MenuDetail from "../pages/MenuDetail";
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
  { path: "/menu/:id",
   element: (
<ProtectedRoutes>
<MenuDetail /> 
</ProtectedRoutes>
   ),
},
  { path: "/login", element: <Login /> }
];

export default routeList;
