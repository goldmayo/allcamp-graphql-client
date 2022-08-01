import { gql } from "@apollo/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { initializeApollo } from "../lib/apolloClient";
import { CampInfo, CampInfoConnection } from "../types/campType";
import styles from "../styles/Home.module.css";
import searchAllCamps from "../lib/query/searchAllcamps";

interface HomeInterface {
  data: {
    searchCamps: CampInfoConnection;
  };
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  const allCamps = data.searchCamps;
  return (
    <div className={styles.container}>
      <Head>
        <title>gocamp | home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to gocamp landing test</h1>
        <h2 className="text-blue-500">tailwind test h2 tag</h2>
        <ul>
          {allCamps.edges &&
            allCamps.edges.map((campInfoEdge) => {
              return (
                <li key={`${campInfoEdge?.node?.contentId}`}>
                  {campInfoEdge?.node?.firstImageUrl && (
                    <Image
                      src={`${campInfoEdge?.node?.firstImageUrl}`}
                      alt={`${campInfoEdge?.node?.facltNm} cover image`}
                      width={500}
                      height={500}
                    />
                  )}
                  <p>{`${campInfoEdge?.node?.facltNm}`}</p>
                  <p>{`${campInfoEdge?.node?.doNm} ${campInfoEdge?.node?.sigunguNm} ${campInfoEdge?.node?.addr1} `}</p>
                  <p>{`${campInfoEdge?.node?.lineIntro}`}</p>
                  <p>{`${campInfoEdge?.node?.tel}`}</p>
                  <p>{`${campInfoEdge?.node?.sbrsCl}`}</p>
                </li>
              );
            })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: searchAllCamps,
    variables: { first: 10 },
  });
  return {
    props: {
      data,
    },
  };
};
