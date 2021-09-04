import React from "react";
import styles from "./MainHeader.module.css";
import NavLinks from "./NavLinks";

const MainHeader = (props) => {
    // *** CONDITIONAL RENDERING *** OPTION 1
//   let condRender;
//   if (props.isLoggedIn) {
//     condRender = (
//       <>
//         <h1>Typical login</h1>
//         <Navbar onLogout={props.onLogout} />
//       </>
//     );
//   } else {
//     condRender = <h1>Typical login</h1>;
//   }
//   return <header className={styles.navbar}>{condRender}</header>;



// *** OPTION 2 ***

return <header className={styles.navbar}>
    <h1>Typical Login</h1>
    <NavLinks />
</header>
};



export default MainHeader;
