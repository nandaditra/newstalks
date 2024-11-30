import NewsProps from "./NewsProps"
import PopulerArticle from "../../components/PopulerArticle";
import NetworkError from "../../components/NetworkError";

const BeritaPopuler = ({article, loading, error}:NewsProps) => {
    return (
       <div className="col-md-4">
             <div className="mt-3">
                  <h5 className="text-blue font-bold">Berita Populer </h5>
                   {error ? <NetworkError/> : <PopulerArticle populers={article} loading={loading} />}                  
             </div>
       </div>
    )
 }

 export default BeritaPopuler