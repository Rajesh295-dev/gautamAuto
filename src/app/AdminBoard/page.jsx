"use client";
//import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AdminBoard = () => {
  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/inventory?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/AdminBoard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const brand = e.target[0].value;
    const img = e.target[1].value;
    const price = e.target[2].value;
    const maxpower = e.target[3].value;
    const mph = e.target[4].value;
    const speed = e.target[5].value;
    const cat = e.target[6].value;
    const desc = e.target[7].value;

    try {
      await fetch("/api/inventory", {
        method: "POST",
        body: JSON.stringify({
          brand,
          img,
          price,
          desc,
          maxpower,
          mph,
          speed,
          cat,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target();
    } catch (err) {
      console.log(err);
    }
  };
  /*
     mutate();
        e.target.reset();
       */
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/inventory/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.Brand}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    <button className={styles.delete}>Remove</button>
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Car</h1>
          <input type="text" placeholder="Brand" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <input type="number" placeholder="Price" className={styles.input} />
          <input
            type="number"
            placeholder="MaxPower"
            className={styles.input}
          />
          <input type="number" placeholder="Mph" className={styles.input} />
          <input type="number" placeholder="Speed" className={styles.input} />
          <input type="text" placeholder="Category" className={styles.input} />

          <textarea
            placeholder="Desc"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Add Inventory</button>
        </form>
      </div>
    );
  }
};

export default AdminBoard;
