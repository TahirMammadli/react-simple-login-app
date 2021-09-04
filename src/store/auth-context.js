import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {}
})

export function AuthContextProvider(props){


const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  function loginHandler() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  }
  function logoutHandler() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }
}


export default AuthContext