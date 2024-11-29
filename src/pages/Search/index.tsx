import { useParams } from "react-router-dom"
import ListArticle from "../../components/ListArticle"
import useFetchData from "../../hook/useFetchData"
import Footer from "../../components/Footer";
import Header from "../../components/Header"

const Search = () => {
   const { keywordId } = useParams()
   let data:string = keywordId ? keywordId: ""

   const searchArticles = useFetchData(data, 5, 10);
   const {article, loading} = searchArticles
   return (
     <>
     
     <Header />

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

     <Footer />

     </>
   )
}

export default Search