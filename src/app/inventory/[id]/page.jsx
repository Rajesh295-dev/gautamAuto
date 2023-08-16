"use client";
import React from "react";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/inventory/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const inventoryItems = async ({ params }) => {
  const feature = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image
          src={feature.img}
          objectFit="contain"
          width={800}
          height={600}
          quality={100}
          layout="responsive"
          alt=""
          className={styles.img}
        />

        <div className={styles.imgDesc}>
          <div className={styles.upDesc}>
            <h2>{feature.brand}</h2>
            <span>Current Price ${feature.price}</span>
          </div>
          <div className={styles.downDesc}>
            <div>
              <h2>{feature.maxpower}hp</h2>
              <span>Max Power</span>
            </div>
            <div>
              {" "}
              <h2>{feature.mph}s</h2>
              <span>0-60mph</span>
            </div>
            <div>
              <h2 className={styles.speed}>{feature.speed}mph</h2>
              <span>Highest track speed(with all weather tires)</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featureContainer}>
        <h2>Key Features</h2>
        <div className={styles.keyFeatures}>
          <div className={styles.featureCard}>
            <Image
              className={styles.featureImg}
              src="/featureImg/cogs.png"
              height={200}
              width={400}
              alt="First slide"
            />
            <h3>Advanced Technology</h3>
            <p>
              Stay connected and entertained with the latest cutting-edge
              technology, including touchscreen displays and smart device
              integration.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Image
              className={styles.featureImg}
              src="/featureImg/pump.jpeg"
              height={200}
              width={400}
              alt="First slide"
            />
            <h3>Fuel Efficiency</h3>
            <p>
              Experience excellent fuel efficiency and save on your daily
              commute with our eco-friendly engine options.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Image
              className={styles.featureImg}
              src="/featureImg/shield.png"
              height={200}
              width={400}
              alt="First slide"
            />
            <h3>Safety Features</h3>
            <p>
              Drive with peace of mind knowing that our cars are equipped with
              advanced safety features to protect you and your passengers.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Image
              className={styles.featureImg}
              src="/featureImg/certificate.jpeg"
              height={200}
              width={400}
              alt="First slide"
            />
            <h3>Reliable Performance</h3>
            <p>
              Enjoy a smooth and reliable driving experience with our
              high-performance engines and state-of-the-art suspension systems.
            </p>
          </div>
        </div>

        <h2>OFFERS</h2>
        <div className={styles.offer}>
          <h1>GautamAuto Graduate Offer</h1>
          <span>GautamAuto Graduate Offer</span>
          <h2>$900</h2>
          <span>in saving</span>
          <div>
            <p className={styles.offerDesc}>
              Are you a recent graduate looking to make your mark in the world?
              We understand the excitement and the need for reliable
              transportation as you embark on this new journey. That's why
              GautamAuto would like thrilled to offer an exclusive discount up
              to $900 for new graduates on the purchase of a brand new car!
            </p>
          </div>

          <Link key={feature._id} href={`/cart/${feature._id}`}>
            <button className={styles.offerButton}>GET THIS OFFER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default inventoryItems;
