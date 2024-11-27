import { Populer } from "./Populer"
import convertDate from "../../util/convertDate";
import { Link } from "react-router-dom";
import SkeletonPopularArticle from "../Skeleton/SkeletonPopularArticle";

interface PopulerListProps {
    populers: Populer[];
    loading:boolean
}


const PopulerArticle = ({populers, loading}:PopulerListProps) =>{
    if(loading) {
        return (
           <div>
              {Array.from({ length: 5 }, (_, i) => <SkeletonPopularArticle key={i} />)}
            </div>
        )
    } 
    
    return (
        <div>
            {populers.map((populer, index)=> (
                <Link to={populer.url} key={index}className="my-1 text-black text-decoration-none">
                   <div className="row">
                     <div className="col-1 mr-3">
                         <h1 className="fs-5">#{index+1}</h1>
                     </div>
                     <div className="col-11">
                         <h4 className="fs-6">{populer.title.substring(0,75)}</h4>
                         <p>{convertDate(populer.publishedAt)}</p>
                     </div>
                   </div>
                </Link>
            ))}
        </div>
    )
}

export default PopulerArticle