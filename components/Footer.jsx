import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/footer.jpeg"
          className={styles.img}
          objectFit="cover"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ONE STOP FOR YOUR ALL AUTO SERVICES, gautamAuto
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR DEALERSHIPS</h1>
          <p className={styles.text}>
            320 N. DuPont Highway
            <br />
            New Castle, DE 19720
            <br />
            (877)967-5464
          </p>
          <p className={styles.text}>
            3282 North DuPont Highway.
            <br />
            Dover, DE 19901
            <br /> (302) 342-8620
          </p>
          <p className={styles.text}>
            21179 College Drive.
            <br />
            Georgetown, DE 19947
            <br />
            (302) 259-6199
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
