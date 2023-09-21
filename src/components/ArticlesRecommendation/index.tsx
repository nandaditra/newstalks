import React from 'react';
import './index.css'
import { ArticleRecommendation } from './ArticleRecommendation';


interface ArticleRecommendationListProps {
    articles: ArticleRecommendation[];
}

function ArticlesRecommendation({articles}:  ArticleRecommendationListProps){
     return (
        <div className="row mx-auto">
            {articles.splice(1, 6).map((article)=> (
                 <div className="col-4 my-1">
                    <img src={article.urlToImage} className="card-img" alt="..." />
                    <div className="card-body mt-2">
                       <a href={article.url} className="text-decoration-none"><h5 className="font-title">{article.title.substring(0,100)}...</h5></a>
                    </div>
                 </div>
            ))}
        </div>
     )
}

export default ArticlesRecommendation