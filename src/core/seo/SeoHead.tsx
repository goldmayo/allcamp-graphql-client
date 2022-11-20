import React from "react";
import Head from "next/head";

interface SeoHeadInterface {
  title: string;
  description: string;
}
const SeoHead: React.FC<SeoHeadInterface> = ({ title, description }) => {
  return (
    <Head>
      <title>AllCamping | {title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SeoHead;
