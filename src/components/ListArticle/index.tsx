import Skeleton from "react-loading-skeleton";
import convertDate from "../../util/convertDate";
import './index.css'
import { Link } from "react-router-dom";

class ListArticleModel {
    id: string | undefined;
    name: string ="";
    author: string ="";
    title: string ="";
    description: string ="";
    url: string ="";
    urlToImage:string ="";
    publishedAt:string ="";
    content: string ="";
}

interface ListArticleProps {
    articles:ListArticleModel[]
    loading:boolean
}

const ListArticleSkeleton = () => {
    return (
        <div className="d-flex my-3">
                <div className="w-25">
                    <Skeleton className="d-block w-100 h-100" count={1}/>
                </div>
                <div className="w-75 px-2">
                    <Skeleton count={2} />
                    <Skeleton className="w-25" count={1}/>
                    <Skeleton count={2} />
                </div>
        </div>
    )
}

const ListArticle = ({articles, loading}:ListArticleProps) => {
    if(loading) {
        return (
            <div>
               {Array.from({ length: 5 }, (_, i) => <ListArticleSkeleton key={i} />)}
            </div>
        )
    }  
    return (
        <div className="mx-auto px-1">
            {articles.map((article, index)=>  {
                if(article.title !== "[Removed]" || article.urlToImage !== null) {
                    return <Link to={article.url} className="row my-3 text-black text-decoration-none" key={index}>
                           <div className="col-11 col-md-3">
                               <img className="d-block w-100" src={article.urlToImage} alt={article.content}/>
                           </div>
                           <div className="col-11 col-md-9 px-2">
                               <h5 className="mb-0 fs-5">{article.title}</h5>
                               <span className="time">{convertDate(article.publishedAt)}</span>
                               <p className="article-desc">{article.description.substring(0,135)}...</p>
                           </div>
                    </Link>     
                }
                return ""
              }
            )}
        </div>
      )
}

export default ListArticle