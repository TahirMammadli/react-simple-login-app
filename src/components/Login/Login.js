import React, { useReducer, useState, useEffect, useContext } from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";
import Input from '../UI/Input';

const loginBtnStyle = { marginTop: "30px", marginLeft: "400px" };

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

function passwordReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 5 };
  }
  return { value: "", isValid: false };
}

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking for validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("clean up");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  function validatePasswordHandler() {
    dispatchPassword({ type: "INPUT_BLUR" });
  }

  function validateEmailHandler() {
    dispatchEmail({ type: "INPUT_BLUR" });
  }

  function passwordChangeHandler(event) {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(event.target.value.trim().length > 5 && emailState.isValid);
  }
  function emailChangeHandler(event) {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(emailState.value.includes("@") && passwordState.isValid);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  }
  return (
    <Card className={styles.login}>
      <form>
        
          <Input
            type="text"
            style={{marginLeft: "68px"}}
            label={"Email"}
            value={emailState.value}
            isValid = {emailIsValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        
          <Input
            type="text"
            label = {"Password"}
            isValid = {passwordIsValid}
            style={{marginLeft: "40px"}}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        <Button
          onClick={formSubmitHandler}
          type="submit"
          style={loginBtnStyle}
          disabled={!formIsValid}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
