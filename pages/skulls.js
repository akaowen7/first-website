import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
import io from 'socket.io-client'
// import { motion } from 'framer-motion';

const socket = io('https://localhost:3000')

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Skulls!</h1>
          <p>💀</p>
        </div>
        <div className={styles.buttons}>
          <Button background="#FF0000" text="YouTube" link="https://www.youtube.com/channel/UC8ZvHJKfa1xhdMwB5k-7BLQ"/>
          {/* <Button background="#1DA1F2" text="Twitter" link="https://twitter.com/not_akaowen"/> */}
          <Button background="#FE5000" text="SoundCloud" link="https://soundcloud.com/user-237901012"/>
          <Button background="linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(131,58,180,1) 100%)" text="Instagram" link="https://www.instagram.com/blue_plain/"/>
          <Button background="#ff0050" text="TikTok" link="https://vm.tiktok.com/ZMJ3161xe/"/>
          <Button background="#1f6feb" text="Github" link="https://github.com/akaowen7"/>
        </div>
      </main>
    </div>
  )
}
