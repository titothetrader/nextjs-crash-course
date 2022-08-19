import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} /> // need to add KEY to make unique entries, otherwise it won't build
      ))}
    </div>
  );
};

export default ArticleList;
