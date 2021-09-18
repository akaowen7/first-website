import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'
// import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Reid Tull</h1>
          <p>I make YouTube videos, music, good twitter takes, and websites now I guess. I've donated to Wikipedia. Twice.</p>
        </div>
        <div className={styles.buttons}>
          <Button background="#FF0000" text="Youtube"/>
          <Button background="#1DA1F2" text="Twitter"/>
          <Button background="#FE5000" text="SoundCloud"/>
          <Button background="linear-gradient(90deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(131,58,180,1) 100%)" text="Instagram"/>
          <Button background="#ff0050" text="TicTok"/>
        </div>
      </main>
    </div>
  )
}
