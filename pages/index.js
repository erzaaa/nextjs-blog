import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "@/lib/post";

const inter = Inter({ subsets: ["latin"] });

// SSGの場合(function名は決まってるから覚えておく)
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id title date thumbnail

  return {
    props: {
      allPostsData,
    },
  };
}

// // SSRの場合(contextにはユーザからのリクエストが入る)
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>私はキュアプリズム！みんなと一緒に世界を守っているヒーローだよ〜♫</p>
      </section>

      <section>
        <h2>⭐️プリズムの活動日誌⭐️</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} legacyBehavior>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
