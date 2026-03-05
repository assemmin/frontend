import React, { useState } from "react";

function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <li>
      <a href={`#${article.id}`} onClick={onClickToggle}>
        {article.title}
      </a>

      <button onClick={() => onClickRemove(article.id)}>
        ×
      </button>

      <p style={{ display: isOpened ? "block" : "none" }}>
        {article.summary}
      </p>
    </li>
  );
}

export default ArticleItem;