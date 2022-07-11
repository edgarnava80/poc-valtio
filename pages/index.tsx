import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSnapshot } from "valtio";
import store from "../store/store";
import Card from '../components/Card';
import LikeButton from '../components/LikeButton';
import Link from 'next/link';
import Foot from '../components/Foot';

const Home: NextPage = () => {
  const state = useSnapshot(store);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunrun POC - Valtio</title>
        <meta name="description" content="Nextjs Sunrun POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.subtitle}>
          Likes: <span className={styles.likes}>{state.likes}</span>
        </h1>
      </header>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Nextjs <a href="https://sunrun.com">Sunrun</a> POC with Valtio
        </h2>
        <LikeButton />
        <Foot />
      </main>
    </div>
  )
}

export default Home
