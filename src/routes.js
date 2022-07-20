import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Home from "components/Home/Home";
import Usuarios from "views/examples/usuarios";
import Cortes from "views/examples/Cortes";
import { Contactar } from "components/Contactar/Contactar";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-green",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    icon: "ni ni-app text-info",
    component: Usuarios,
    layout: "/admin",
  },
  {
    path: "/admin",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Cortes",
    name: "My haircut",
    icon: "ni ni-folder-17 text-red",
    component: Cortes,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/admin",
    name: "Setting",
    icon: "ni ni-settings text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/info",
    name: "Chat",
    icon: "ni ni-send text-pink",
    component: Contactar,
    layout: "/admin",
  },
  
];
export default routes;
