import React, {useContext} from "react";
import styles from "./NavLinks.module.css";
import Button from "../UI/Button";
import AuthContext from '../../store/auth-context'

const Navbar = (props) => {
 
  const ctx = useContext(AuthContext)
  return <div className={styles["nav-links"]}>
  <ul className={styles["navbar__list"]}>
    {ctx.isLoggedIn && (
    <li className={styles["navbar__list-item"]}>Users</li>
    )}
    {ctx.isLoggedIn && (
    <li className={styles["navbar__list-item"]}>Admin</li>
    )}
    {ctx.isLoggedIn && (
    <li className={styles["navbar__list-item"]}>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </li>
    )}
  </ul>
</div>
};

export default Navbar;
