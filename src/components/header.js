import { useEffect, useState } from "react";
import styles from "./header.module.css";
import userIcon from "./user-icon.jpg";

export default function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <div className={styles.navigation}>
        <div>Home</div>
        <div>Products</div>
        <div>Cart</div>
        <div className={styles.userDiv}>
          User <img className={styles.userIcon} src={userIcon} alt="user icon" />{" "}
        </div>
      </div>
    </header>
  );
}
