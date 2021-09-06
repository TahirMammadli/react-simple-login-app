import React, {useContext} from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import styles from "./Home.module.css"
import Button from "../UI/Button";

const LoggedIn = () => {

  const authCtx = useContext(AuthContext)

  return (
    <Card className={styles.loggedIn}>
      <h2>You're logged in!</h2>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default LoggedIn;
