import { useEffect, useState } from "react";
import Header from "../../layout/Header";
import axios from "axios";
import Articles from "../../components/Articles";
import PopulerArticle from "../../components/PopulerArticle";
import "react-loading-skeleton/dist/skeleton.css";
import ListArticle from "../../components/ListArticle";
import Footer from "../../layout/Footer";

const Home = () => {
    const [headline, setHeadline] = useState([])
    const [populer, setPopuler] = useState([])
    const [rowArticle, setRowArticle] = useState([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      async function fetchData() {
         setLoading(true)
         await axios.get(`https://newsapi.org/v2/everything?q=trending&apiKey=082fa67973a5461cad981bea600133b5`)
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
         await axios.get('https://newsapi.org/v2/everything?q=populer&apiKey=082fa67973a5461cad981bea600133b5')
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
                           <nav aria-label="Page navigation example">
                              <ul className="pagination text-center">
                                    <li className="page-item">
                                       <a className="page-link" href="/" aria-label="Previous">
                                          <span aria-hidden="true">&laquo;</span>
                                       </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="?page=2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="?page=3">3</a></li>
                                    <li className="page-item"><a className="page-link" href="?page=4">4</a></li>
                                    <li className="page-item"><a className="page-link" href="?page=5">5</a></li>
                                    <li className="page-item">
                                       <a className="page-link" href="/" aria-label="Next">
                                         <span aria-hidden="true">&raquo;</span>
                                      </a>
                                   </li>
                              </ul>
                           </nav>
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