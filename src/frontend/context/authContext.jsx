import { createContext, useContext, useEffect, useState } from "react";
const Authcontext = createContext();
const useAuth = () => useContext(Authcontext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("user") || "",
  });

  const [showpassword, setShowPassword] = useState(false);

  return (
    <Authcontext.Provider
      value={{ auth, setAuth, showpassword, setShowPassword }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export { useAuth, AuthProvider };
