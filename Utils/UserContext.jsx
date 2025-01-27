import { createContext } from "react";

const UserContext = createContext({
  loggedIn: "User Info",
});

export default UserContext;
