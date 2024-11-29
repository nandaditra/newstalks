import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Articles from "../../components/Articles";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "../../components/Footer";
import api from "../../api/api";
import Trending from "./Trending";
import BeritaPopuler from "./BeritaPopuler";

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
                 <Trending article={rowArticle} loading={isLoading}/>
                 <BeritaPopuler article={populer} loading={isLoading}/>
              </div>
           </div>
        </main>

        <Footer />
        </>
    )
}

export default Home