import styles from "../styles/ServiceList.module.css";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
/*
const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    price: 25000,
    color: "Blue",
    year: 2022,
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    price: 22000,
    color: "Red",
    year: 2023,
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    price: 45000,
    color: "Black",
    year: 2021,
  },
];
*/

const ServiceList = async () => {
  return (
    <div className={styles.container}>
      <h1>THE COMPLETE AUTO SERVICES IN TOWN</h1>
      <h3>Schedule Your Appointmet Today</h3>
      <p className={styles.listDesc}>
        GautamAuto strives to deliver a seamless and enjoyable car-buying
        experience, offering competitive prices, flexible financing options, and
        top-notch customer service. Discover your perfect ride at GautamAuto and
        embark on your journey with confidence and style.
      </p>
      <div className={styles.wrapper}>
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServiceList;
