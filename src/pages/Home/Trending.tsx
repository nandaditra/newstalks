import NewsProps from "./NewsProps"
import ListArticle from "../../components/ListArticle";
import NetworkError from "../../components/NetworkError";

const Trending = ({article, loading, error}:NewsProps) => {
    return (
       <div className="col-md-8">
             <div className="my-3">
                <h5 className="text-blue fw-semibold mt-2">Trending</h5>
                   <div className="my-2">
                         {error ? <NetworkError /> : <ListArticle articles={article} loading={loading}/>}
                   </div>
             </div>
       </div>
    )
 }

 export default Trending