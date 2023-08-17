import Image from "next/image";
import styles from "../styles/ServiceCard.module.css";

const ServiceCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.serviceCard}>
        <div className={styles.serviceImage}>
          <Image
            src="/serviceImg/lowin.jpeg"
            alt="Service 1"
            width={250}
            height={200}
          />
        </div>
        <h3 className={styles.serviceTitle}>Finance Services</h3>
        <p className={styles.serviceDesc}>
          Simplify your car financing process with our dedicated finance
          services. Our team of professionals will assist you in finding the
          best financing options, securing competitive rates, and ensuring a
          smooth and hassle-free experience. Drive away with your dream car
          today!
        </p>
      </div>

      <div className={styles.serviceCard}>
        <div className={styles.serviceImage}>
          <Image
            src="/serviceImg/trading.jpeg"
            alt="Service 2"
            width={250}
            height={200}
          />
        </div>
        <h3 className={styles.serviceTitle}>Sell Your Car</h3>
        <p className={styles.serviceDesc}>
          Looking to sell your car? We offer a flexible trading process,
          providing fair and competitive offers for your used vehicle. Our
          experts will guide you through the entire selling process, making it
          convenient and straightforward.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.serviceImage}>
          <Image
            src="/serviceImg/diagnost.jpeg"
            alt="Service 3"
            width={250}
            height={200}
          />
        </div>
        <h3 className={styles.serviceTitle}>Diagnostic Services</h3>
        <p className={styles.serviceDesc}>
          Trust our advanced diagnostic equipment and experienced technicians to
          identify and resolve any issues with your vehicle. We provide accurate
          diagnostics and effective solutions to get your car back on the road
          with optimal performance.
        </p>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.serviceImage}>
          <Image
            src="/serviceImg/maintenance.jpeg"
            alt="Service 4"
            width={250}
            height={200}
          />
        </div>
        <h3 className={styles.serviceTitle}>Regular Maintenance</h3>
        <p className={styles.serviceDesc}>
          Keep your vehicle in optimal condition with our comprehensive regular
          maintenance services. Our skilled technicians will perform routine
          inspections, fluid checks, and other essential tasks to ensure the
          longevity and reliability of your vehicle.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
