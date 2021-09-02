import React from "react";
import Card from "../UI/Card";
import styles from "./LoggedIn.module.css"

const LoggedIn = () => {
  return (
    <Card className={styles.loggedIn}>
      <h2>You're logged in!</h2>
    </Card>
  );
};

export default LoggedIn;
