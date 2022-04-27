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
            Welcome to <a href="#">Qweerky!</a>
          </h1>
          
          <p className={styles.description}>
            Create your first playlist @ {' '}
            <code className={styles.code}>/playlists/{auth.uid}</code>
          </p>
          

          <div className={styles.grid}>
            <a href="#" className={styles.card}>
              <h2>Library &rarr;</h2>
              <p>View all your favorite songs</p>
            </a>

            <a href="#" className={styles.card}>
              <h2>Explore &rarr;</h2>
              <p>Check out new songs!</p>
            </a>

            <a
              href="#"
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
      </div>
    </Page>
  )
}

Home.layout = Dashboard;

export default Home;