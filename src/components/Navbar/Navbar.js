import React from "react";
import styles from "./Navbar.module.css";
import Button from "../UI/Button";

const Navbar = (props) => {
  function logoutHandler(){
    props.onLogout();
  }
  let condRender;
  if (props.isLoggedIn) {
    condRender = (
      <div className={styles.navbar}>
        <h1>Typical login</h1>
          <ul className={styles['navbar__list']}>
            <li className={styles['navbar__list-item']}>Users</li>
            <li className={styles['navbar__list-item']}>Admin</li>
            <li className={styles['navbar__list-item']}><Button onClick={logoutHandler}>Logout</Button></li>
          </ul>
      </div>
    );
  } else {
    condRender = (
      <div className={styles.navbar}>
        <h1>Typical login</h1>
      </div>
    );
  }
  return <div>{condRender}</div>;
};

export default Navbar;
