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
        <Button />
      </main>
    </div>
  )
}
