import React, { useState } from "react";

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
      <h1>Articles</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <button onClick={onClickAdd}>Add</button>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title}
            <button onClick={() => onClickRemove(article.id)}>×</button>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleManager;