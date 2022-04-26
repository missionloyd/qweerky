import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../components/shared/Page'
import Dashboard from '../layouts/DashboardLayout/Dashboard'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

function Home() {
  const auth = useContext(UserContext);

  return (
    <Page 
      title='Home'
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Qweerky!</a>
          </h1>

          <p className={styles.description}>
            Create your first playlist{' '}
            <code className={styles.code}>qweerky/create</code>
          </p>
          <h1>A user's library is just a global playlist</h1>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Library &rarr;</h2>
              <p>View all your favorite songs</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Explore &rarr;</h2>
              <p>Check out new songs!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Playlists &rarr;</h2>
              <p>Write, update, and delete</p>
            </a>

            <a
              onClick={e => auth.logout()}
              className={styles.card}
            >
              <h2>Logout &rarr;</h2>
              <p>See you later!</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Page>
  )
}

Home.layout = Dashboard;

export default Home;