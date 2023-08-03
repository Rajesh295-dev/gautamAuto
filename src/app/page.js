"use client"

import Image from "next/image";
import Head from "next/head";
import axios from "axios"
import styles from './page.module.css'
import Featured from '../../components/Featured'
import ServiceList from '../../components/ServiceList'


export default function Home() {
  return (
    <div className={styles.main}>
      <Featured />
      <ServiceList />
    </div>
  );
}




