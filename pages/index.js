import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Our Favorite Things</title>
        <meta name="description" content="Product Reviews and Advice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        This will be a big image or something
      </div>
    </main>
  )
}
