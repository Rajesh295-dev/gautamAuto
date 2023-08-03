"use client";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
//import axios from "axios";
//import { useState, useEffect } from "react";

//import Link from "next/link";

/*  R>k=7/Ja  */

/*
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/orders/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
  console.log("receipt data:", res);
}
*/

const order = {
  _id: "64b7340bcbd981016c5303e4",
  customer: "John",
  address: "Whitemarsh",
  total: "70000",
  maxpower: "700hp",
  mph: "7.9s",
  speed: "770mph",
};

const Receipt = () => {
  // Replace this with your order data retrieval logic

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Receipt</h1>

      <div className={styles.row}>
        <div className={styles.logoContainer}>
          <div className={styles.invoice_logo}>
            <img width="200" src="/img/logo.png" alt="Invoice logo" />
          </div>

          <div className={styles.invoice_from}>
            <ul>
              <li>GautamAuto</li>
              <li>320 North DuPont Highway</li>
              <li>New Castle, DE 19720</li>
              <li>(302)-342-8620</li>
            </ul>
          </div>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Sub Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.name}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{order.address}</span>
              </td>
              <td>
                <span className={styles.total}>$60600</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className={styles.table_border}>
          <tfoot>
            <tr>
              <th className="text-right">Sub Total:</th>
              <td className="text-center">$237.00 </td>
            </tr>
            <tr>
              <th className="text-right">20% TAX:</th>
              <td className="text-center">$47.40 </td>
            </tr>
            <tr>
              <th className="text-right">Credit:</th>
              <td className="text-center">$00.00 </td>
            </tr>
            <tr>
              <th className="text-right">Total:</th>
              <td className="text-center">$ {order.total} </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h1 className={styles.total}>Total: ${order.total}</h1>
      <div className={styles.invoice_footer}>
        <p className={styles.text_center}>
          Generated on Tuesday, August 09th, 2023{" "}
          <button onClick={() => window.print()} className={styles.printBtn}>
            Print Receipt
          </button>
        </p>
      </div>
    </div>
  );
};

export default Receipt;
