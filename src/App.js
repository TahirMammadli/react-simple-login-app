import React, {useState, useEffect} from 'react'
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import LoggedIn from './components/LoggedIn/LoggedIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInfo === "1"){
      setIsLoggedIn(true)
    }
  }, [])
  function loginHandler(){
    setIsLoggedIn(true)
    localStorage.setItem("isLoggedIn", '1')
  }
  function logoutHandler(){
    setIsLoggedIn(false)
    localStorage.removeItem("isLoggedIn")
  }
  return (
    <React.Fragment>
      <Navbar isLoggedIn={isLoggedIn} onLogout={logoutHandler}/>
      
      {isLoggedIn ? <LoggedIn /> : <Login onLogin={loginHandler} />}
    </React.Fragment>
  );
}

export default App;
