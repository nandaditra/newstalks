import { useEffect, useState } from "react";
import Articles from "../../components/Articles";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../api/api";
import Trending from "./Trending";
import BeritaPopuler from "./BeritaPopuler";
import dateNow from "../../util/dateNow";

const Home = () => {
    const [headline, setHeadline] = useState([])
    const [populer, setPopuler] = useState([])
    const [rowArticle, setRowArticle] = useState([])
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      async function fetchData() {
         setLoading(true)
         await api.get(`/top-news?source-country=us&language=en&date=${dateNow}&api-key=83ed7be80d974aad81ff6638e635dcec`)
         .then((response)=> {
             if(response) {
               setLoading(false)
               setRowArticle(response.data.top_news[0]["news"])
               setHeadline(response.data.top_news[0]["news"])
             }
         })
         .catch((error) =>  {
            setError(true)
            console.log(error)
           } 
         )
      } 

      async function getPopulerData() {
         await api.get(`/search-news?text=popular&language=en&earliest-publish-date=${dateNow}&api-key=83ed7be80d974aad81ff6638e635dcec`)
          .then((response)=> {
             setPopuler(response.data.news)
          })
          .catch((error)=> {
             console.log(error)
          })
     }

      fetchData();
      getPopulerData();
    }, [])


    return (
        <main>
           <div className="container">
              <Articles articles={headline} loading={isLoading}/>
              <div className="row">
                 <Trending article={rowArticle} loading={isLoading} error={error}/>
                 <BeritaPopuler article={populer} loading={isLoading} error={error}/>
              </div>
           </div>
        </main>
    )
}

export default Home