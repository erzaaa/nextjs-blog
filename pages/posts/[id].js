import Layout from "@/components/Layout";
import { getAllPostIds, getBlogData } from "@/lib/post";
import Head from "next/head";
import Link from "next/link";
import styles from "../../components/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false, // falseにすると、pathsにないページにアクセスすると404になる
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  return {
    props: {
      blogData,
    },
  };
}

export default function Post({ blogData }) {
  return (
    <Layout>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{blogData.title}</h1>
        <img src={blogData.gif} className={styles.gif} />
        <div className={utilStyles.lightText}>{blogData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: blogData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
