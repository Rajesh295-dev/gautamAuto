import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "gautamAuto about",
  description: "React nextjs final project",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/carImage/about.jpeg"
          fill={true}
          quality={100}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h3 className={styles.imgTitle}>
            With a commitment to quality, innovation, and customer satisfaction.
          </h3>
          <p className={styles.imgDesc}>
            GautamAuto has established itself as a trusted name in the
            automotive industry.
          </p>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.item}>
          <h1 className={styles.aboutTitle}> GautamAuto</h1>
          <p className={styles.desc}>
            GautamAuto is a leading automotive company dedicated to providing
            exceptional vehicles and services to our valued customers. With a
            rich history spanning over a decade, we have established ourselves
            as a trusted name in the industry.
          </p>
          <div className={styles.item}>
            <h2 className={styles.aboutTitle}>Our Mission</h2>
            <p className={styles.desc}>
              <br />
              <br /> - Our mission is to deliver excellence in every aspect of
              our business. We strive to offer a diverse range of top-quality
              vehicles, from luxury sedans to rugged SUVs, catering to the
              unique needs and preferences of our customers.
              <br />
              <br /> - We prioritize customer satisfaction above all else. Our
              team of experienced professionals is committed to providing
              personalized assistance, guiding you through the car-buying
              process, and ensuring a seamless experience from start to finish.
              <br />
              <br /> - We believe in the power of innovation and constantly stay
              at the forefront of industry advancements. From cutting-edge
              technology to eco-friendly solutions, we strive to incorporate the
              latest features and trends into our vehicle offerings.
            </p>
          </div>

          <div className={styles.item}>
            <h2 className={styles.aboutTitle}>Thank you</h2>
            <p className={styles.desc}>
              Additionally, we take pride in our exceptional after-sales
              services. Our state-of-the-art service centers are staffed with
              skilled technicians who are dedicated to maintaining and repairing
              your vehicle with precision and care.
              <br />
              Thank you for choosing GautamAuto as your automotive partner. We
              look forward to serving you and fulfilling your automotive needs
              with utmost professionalism and dedication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
