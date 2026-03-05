import React, { useState } from "react";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";

function ArticleManager() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onClickAdd = () => {
    if (!title || !summary) return;

    const newArticle = {
      id: Date.now(),
      title,
      summary,
    };

    setArticles([...articles, newArticle]);
    setTitle("");
    setSummary("");
  };

  const onClickRemove = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      <ArticleList
        articles={articles}
        onClickRemove={onClickRemove}
      />
    </div>
  );
}

export default ArticleManager;