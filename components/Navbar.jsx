"use client";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
//import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Product",
    url: "/inventory",
  },

  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  //const session = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/logo.png" alt="" width="160" height="69" />
      </div>

      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>

      <button
        className={styles.logout}
        onClick={() => {
          console.log("logged out");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
