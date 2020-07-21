import React from 'react';
import "./Article.scss";

function Article({ArticleImage, Author, Heading, Body}) {
  return(
    <div className={"Article"}>
      <img className={"Article-Image"} alt={"Article"} src={ArticleImage}/>
      <span className={"Article-Author"}>By {Author}</span>
      <span className={"Article-Heading"}>{Heading}</span>
      <span className={"Article-Body"}>{Body}</span>
    </div>
  );
}

export default Article;