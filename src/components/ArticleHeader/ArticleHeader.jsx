import style from "./ArticleHeader.module.css";

const ArticleHeader = ({ text }) => {
  return (
    <header className={style.ArticleHeaderContainer}>
      <div className={style.left}></div>
      <h2>{text}</h2>
      <div className={style.right}></div>
    </header>
  );
};

export default ArticleHeader;
