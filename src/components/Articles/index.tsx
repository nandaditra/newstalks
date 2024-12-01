import './index.css'
import SkeletonArticles from '../Skeleton/SkeletonArticles';
import { ArticleModel } from '../../model/ArticleModel/ArticleModel';

interface ArticleListProps  {
    articles: ArticleModel[];
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
                    <img src={article.thumbnail} className="card-img-top" alt={article.title}/>
                    <div className="card-body mt-2">
                       <a href={article.link} className="text-decoration-none"><h6 className="font-title">{article.title.substring(0,60)}...</h6></a>
                    </div>
                 </div>
            ))}
        </div>
    )
}

export default Articles