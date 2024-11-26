import './index.css'
import { Article } from "./Article";
import Skeleton from 'react-loading-skeleton';


interface ArticleListProps {
    articles: Article[];
    loading: boolean,
}

const SkeletonArticles = () => {
    return (
        <div className="col-6 col-md-2">
            <Skeleton className="card-skeleton" count={1}/>
            <Skeleton count={2}/>
       </div>
    )
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
              {articles.map((article, index)=>  (
                 <div key={index} className="col-6 col-md-2"> 
                    <img src={article.urlToImage} className="card-img-top" alt={article.author}/>
                    <div className="card-body mt-2">
                       <a href={article.url} className="text-decoration-none"><h6 className="font-title">{article.title.substring(0,60)}...</h6></a>
                    </div>
                 </div>
            ))}
        </div>
    )
}

export default Articles