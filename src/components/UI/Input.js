import React from 'react'
import styles from './Input.module.css'

const Login = (props) => {
    return (
        <div
          className={`${styles["email-password"]} ${
            props.isValid === false ? styles.invalid : ""
          }`}
        >
        <label htmlFor="">{props.label}</label>

        <input
            type={props.type}
            style={props.style}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
          </div>
    )
}

export default Login
