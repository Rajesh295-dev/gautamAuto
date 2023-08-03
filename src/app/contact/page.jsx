import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../../components/Button/Button";

export const metadata = {
  title: "gautamAuto contact page",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Don't hesitate to provide your questions and concerns
      </h1>
      <div className={styles.imgContainer}>
        <Image
          src="/img/logo.png"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
        </form>
        <Button className={styles.button} url="#" text="Send" />
      </div>
    </div>
  );
};

export default Contact;
