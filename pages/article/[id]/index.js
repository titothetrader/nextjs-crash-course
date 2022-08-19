import { server } from "../../../config";
import Link from "next/link";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// This fetches our data "privately" by calling our own API URL
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id); // massaging data to fith "paths" object format
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(), // the ID must be returned in string format
    },
  }));

  return {
    paths, // paths object
    fallback: false, // return 404 page if data does not exist
  };
};

export default article;
