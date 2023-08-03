"use client";
//import styles from "/styles/Cart.module.css";
import { notFound, useParams } from "next/navigation";
import getCart from "@/app/libs/getCart";
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
//import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import Link from "next/link";

/*
async function getData(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`http://localhost:3000/api/inventory/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
  console.log(res);
}
*/

const feature = {
  img: "/carImage/bmw.jpeg",
  brand: "Honda",
  price: "70000",
  Dprice: "100",
  maxpower: "700hp",
  mph: "7.9s",
  speed: "770mph",
};

const Cart = () => {
  // initiate both request in parallel

  console.log("this is the cart items:", feature);
  const router = useRouter();

  const createOrder = async (data) => {
    // Pass the feature data as query parameters to the "cart" page
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        // dispatch(reset());
        router.push(`/receipt/ ${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // This values are the props in the UI
  const amount = feature.Dprice;
  const currency = "USD";
  const style = { layout: "vertical" };

  const [open, setOpen] = useState(false);

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: feature.Dprice,
                method: 1,
              });
              console.log("this payer info:", details);
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={feature.img}
          alt=""
          width={400}
          height={200}
          className={styles.img}
        />
      </div>
      <span className={styles.sideBorder}></span>
      <div className={styles.content}>
        <h1 className={styles.title}>{feature.brand}</h1>
        <p className={styles.desc}>OriginalPrice: ${feature.price}</p>
        <p className={styles.desc}>
          Price after the discount: ${feature.Dprice}
        </p>
        {open ? (
          <div className={styles.paymentOpt}>
            <PayPalScriptProvider
              options={{
                clientId:
                  "ARaLnutQJH-4--_dAN-F67z8AhAATacSTrf1V5s8r4RiOGITfboSgb8jV2Q7HtSuNCsZ5N9O_eJ18QiA",
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24 ",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        ) : (
          <button onClick={() => setOpen(true)} className={styles.offerButton}>
            MAKE A PRE-PAY
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
