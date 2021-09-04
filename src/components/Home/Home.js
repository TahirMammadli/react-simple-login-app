import React, {useContext} from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import styles from "./Home.module.css"

const LoggedIn = () => {

  const authCtx = useContext(AuthContext)

  return (
    <Card className={styles.loggedIn}>
      <h2>You're logged in!</h2>
    </Card>
  );
};

export default LoggedIn;
