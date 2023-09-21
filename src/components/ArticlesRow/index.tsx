import React from 'react'
import { ArticleRow } from './ArticleRow';
import './index.css'

interface ArticleRowListProps {
     articles: ArticleRow[];
}

function ArticlesRow({articles}: ArticleRowListProps){
     return (
        <div className="my-3">
           {articles.splice(2,4).map((article)=> (
               <div className="row my-3">
                 <div className="col-3">
                     <img 
                        className="img-article" 
                        src={article.urlToImage}/>
                  </div>
                  <div className="col-9">
                      <h4 className="fs-5">{article.title}</h4>
                      <p className="description">{article.description}</p>
                  </div>
               </div>
           ))}
        </div>
     )
}

export default ArticlesRow