import Head from 'next/head'
import styles from '../styles/Infopage.module.css'
import io from 'socket.io-client'
// import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('http://api.octranspo1.com/v2.0/GetNextTripsForStop?appID={f73908ba}&apiKey={2525d3e3bd03a7b4975f6d9d5385b1ba}&stopNo={3009}&routeNo={1}')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
       .catch((err) => {
        console.log(err.message);
      });
  }, [])

  const [busData, setBusData] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Info</title>
      </Head>

      <h1>Next Bus</h1>
    </div>
  )
}
