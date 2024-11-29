import NewsProps from "./NewsProps"
import ListArticle from "../../components/ListArticle";

const Trending = ({article, loading}:NewsProps) => {
    return (
       <div className="col-md-8">
             <div className="my-3">
                <h5 className="text-blue fw-semibold mt-2">Trending</h5>
                   <div className="my-2">
                         <ListArticle articles={article} loading={loading}/>
                   </div>
             </div>
       </div>
    )
 }

 export default Trending