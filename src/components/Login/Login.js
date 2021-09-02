import React from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const loginBtnStyle = { marginTop: "30px", marginLeft: "400px"};

const Login = (props) => {
  function loginHandler(){
    props.onLogin();
  }
  return (
    <Card className={styles.login}>
      <form onSubmit={loginHandler}>
        <div className={styles['email-password']}>
          <label htmlFor="">Email</label>
          <input type="text"  className={styles.emailInput}/>
        </div>
        <div className={styles['email-password']}>
          <label htmlFor="">
            Password
          </label>
          <input type="text" className={styles.passwordInput} />
        </div>
        <Button type="submit" style={loginBtnStyle}>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
