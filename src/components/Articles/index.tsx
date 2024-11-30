import './index.css'
import { Article } from "./Article";
import SkeletonArticles from '../Skeleton/SkeletonArticles';

interface ArticleListProps  {
    articles: Article[];
    loading: boolean,
}

const Articles = ({ articles, loading}:ArticleListProps) => { 
    if(loading) {
        return (
            <div className="row mx-auto">
                {Array.from({ length: 6 }, (_, i) => <SkeletonArticles key={i} />)}
            </div>
        )
    }
    
    return (
        <div className="row mx-auto">
              {articles.splice(0,6).map((article, index)=>  (
                 <div key={index} className="col-6 col-md-2"> 
                    <img src={article.image} className="card-img-top" alt={article.author}/>
                    <div className="card-body mt-2">
                       <a href={article.url} className="text-decoration-none"><h6 className="font-title">{article.title.substring(0,60)}...</h6></a>
                    </div>
                 </div>
            ))}
        </div>
    )
}

export default Articles