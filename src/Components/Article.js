import React from 'react';
import "./Article.scss";

class Article extends React.Component {
  render() {
    return(
      <div className={"Article"}>
        <img className={"Article-Image"} alt={"Article"} src={this.props.ArticleImage}/>
        <span className={"Article-Author"}>By {this.props.Author}</span>
        <span className={"Article-Heading"}>{this.props.Heading}</span>
        <span className={"Article-Body"}>{this.props.Body}</span>
      </div>
    );
  }
}

export default Article;