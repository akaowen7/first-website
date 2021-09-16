import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

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
          <p>Entrepreneur, boob enthusiast and hometown clown. If you want my number ask your mom. he/him</p>
        </div>
        <div className={styles.buttons}>
          <Button background="red"/>
          <Button background="blue"/>
          <Button background="yellow"/>
          <Button background="blue"/>
        </div>
      </main>
    </div>
  )
}
