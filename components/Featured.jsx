import styles from "../styles/newFeatured.module.css";
import Image from "next/image";

import { useState, useEffect } from "react";

const Featured = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "img/lexus.jpeg",
    "img/mustangGt.jpeg",
    "img/lexus.jpeg",
    "img/mustangGt.jpeg",
    "img/lexus.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderDesc}>
        <h2>Welcome To GautamAuto 🙏</h2>
        <h3>It's the Bright One, It's that Right One</h3>
        <p>
          Now, 2.25% APR Financing + $3000 purchase credit now through May 31st.
        </p>
      </div>

      <div id="sliderWrpper" className={styles.sliderImage}>
        <img
          className={styles.sliderImage}
          src={images[imageIndex]}
          alt="Slider"
        />
      </div>

      <div
        id={styles.prev}
        className={styles.arrowContainer}
        onClick={prevImage}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        id={styles.next}
        className={styles.arrowContainer}
        onClick={nextImage}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
