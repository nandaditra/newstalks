import React from "react"
import './index.css'
import { Article } from "./Article"

interface ArticleListProps {
    articles: Article[];
}

function Articles({ articles}:ArticleListProps) {
    return (
        <div className="row mx-auto">
            {articles.splice(1, 6).map((article)=> (
                 <div className="col-2">
                    <img src={article.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body mt-2">
                       <a href={article.url} className="text-decoration-none"><h5 className="font-title">{article.title.substring(0,70)}...</h5></a>
                    </div>
                 </div>
            ))}
        </div>
    )
}

export default Articles