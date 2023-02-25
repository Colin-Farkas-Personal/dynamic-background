import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import DropImageCard from '@/components/DropImageCard'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleCardHover = () => {

  }
  return (
    <>
      <Head>
        <title>Dynamic Background | Main </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={classNames(styles.home)}>
        <div className={styles['home__body-section']}>
        <section className={styles['home__header']}>
          <h1>Dynamic Background</h1>
          <p>Drop your image in the box below to add a dynamic background to it</p>
        </section>
        <section className={styles['home__drop-image-card']}>
          <DropImageCard/>
        </section>
        </div>
      </main>
    </>
  )
}
