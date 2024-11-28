import { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Articles from "../../components/Articles";
import PopulerArticle from "../../components/PopulerArticle";
import "react-loading-skeleton/dist/skeleton.css";
import ListArticle from "../../components/ListArticle";
import Footer from "../../layout/Footer";
import api from "../../api/api";

const Home = () => {
    const [headline, setHeadline] = useState([])
    const [populer, setPopuler] = useState([])
    const [rowArticle, setRowArticle] = useState([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      async function fetchData() {
         setLoading(true)
         await api.get(`/everything?q=trending`)
         .then((response)=> {
             if(response) {
               setLoading(false)
               setHeadline(response.data.articles.splice(0,6))
               setRowArticle(response.data.articles.splice(0,5))
             }
         })
         .catch((error) => 
            console.error(error)
         )
      } 

      async function getPopulerData() {
         await api.get('/everything?q=populer')
          .then((response)=> {
             setPopuler(response.data.articles.splice(1,5))
          })
          .catch((error)=> {
             console.log(error)
          })
     }

      fetchData();
      getPopulerData();
    }, [])


    return (
        <>
        <Header />

        <main>
           <div className="container">
              <Articles articles={headline} loading={isLoading}/>
              <div className="row">
                 <div className="col-md-8">
                   <div className="my-3">
                      <h5 className="text-blue fw-semibold mt-2">Trending</h5>
                      <div className="my-2">
                           <ListArticle articles={rowArticle} loading={isLoading}/>
                      </div>
                   </div>
                 </div>
                 <div className="col-md-4">
                    <div className="mt-3">
                      <h5 className="text-blue font-bold">Berita Populer </h5>        
                      <PopulerArticle populers={populer} loading={isLoading} />
                      
                    </div>
                 </div>
              </div>
           </div>
        </main>

        <Footer />
        </>
    )
}

export default Home