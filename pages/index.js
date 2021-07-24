import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>EthGuild</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to EthGuild 🤖</h1>

        <p className={styles.description}>
          A community of #Buidlers matching web3 projects with the best skills
          🔥
        </p>

        <div className={styles.grid}>
          <Link href='/freelance' passHref>
            <a className={styles.card}>
              <h2>I am a developer &rarr;</h2>
              <p>
                Fill your skills, explore opportunities, and get paid securely
                😎
              </p>
            </a>
          </Link>

          <Link href='/client' passHref>
            <a className={styles.card}>
              <h2>I am a project owner &rarr;</h2>
              <p>
                Submit your project, provide a budget and get connected
                with the best devs 🚀
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/kleros.png' alt='Kleros Logo' width={40} height={40} />
          </span>
        </a>
      </footer>
    </div>
  )
}
