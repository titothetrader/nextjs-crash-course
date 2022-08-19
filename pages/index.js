import { server } from "../config/index";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

// This fetches our data "privately" by calling our own API URL
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`); // Here we add the server URL
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// Code below is to call an external API publicly
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
