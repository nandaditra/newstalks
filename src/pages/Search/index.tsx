import { useParams } from "react-router-dom"
import ListArticle from "../../components/ListArticle"
import useFetchData from "../../hook/useFetchData"

const Search = () => {
   const { keywordId } = useParams()
   let data:string = keywordId ? keywordId: ""

   const searchArticles = useFetchData(data);
   const {article, loading} = searchArticles
   return (
     <main>
           <div className="container"> 
                 <div className="row">
                    <div className="mx-auto col-12 col-md-8">
                        <h4 className="text-black">Hasil Penelusuran : {data}</h4>
                        <ListArticle articles={article} loading={loading}/>
                    </div>
                 </div>
            </div>
     </main>
   )
}

export default Search