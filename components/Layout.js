import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "キュアプリズム";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/prism.jpg"
          className={`${utilStyles.borderCircle} ${styles.pictureSize}`}
        />
        <h1 className={utilStyles.heading2xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←前へ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
