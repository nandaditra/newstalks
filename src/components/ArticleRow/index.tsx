import React from 'react'
import { ArticleRow } from './ArticleRow';
import { Link } from 'react-router-dom';

interface ArticleRowListProps {
     articles: ArticleRow[];
}

function ArticlesRow({articles}: ArticleRowListProps){
     return (
        <div className="my-3">
           {articles.splice(2,4).map((article)=> (
               <Link to={article.url} className="row my-3 text-black text-decoration-none">
                 <div className="col-3">
                     <img 
                        className="img-article" 
                        src={article.urlToImage}/>
                  </div>
                  <div className="col-9">
                      <h4 className="fs-5">{article.title}</h4>
                      <p className="description">{article.description}</p>
                  </div>
               </Link>
           ))}
        </div>
     )
}

export default ArticlesRow