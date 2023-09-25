import { useEffect, useState } from "react"
import Footer from "../../layout/Footer"
import Header from "../../layout/Header"
import axios from "axios";
import Articles from "../../components/Articles";
import Carousel from "../../components/Carousel";
import ArticlesRecommendation from "../../components/ArticlesRecommendation";
import ArticlesRow from "../../components/ArticlesRow";
import PopulerArticle from "../../components/PopulerArticle";
import UntukAnda from "../../components/UntukAnda";

function News(){
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState();
    const [carousel, setCarousel] = useState([]);
    const [article, setArticle] = useState([]);
    const [page, setPage] = useState(30);
    const [populer, setPopuler] = useState([]);

   useEffect(()=> {
       async function getData(){
            await axios.get("https://newsapi.org/v2/everything?q=news&apiKey=def8879f67a8461da80185c9ad705fc7")
            .then((response)=> {
                setData(response.data.articles.splice(1,page))
                setCarousel(response.data.articles.splice(0,3))
                setArticle(response.data.articles.splice(1, page))
            })
            .catch((error) => 
            console.error(error)
            )
        }

        async function getPopulerData() {
            await axios.get('https://newsapi.org/v2/everything?q=news+populer&apiKey=def8879f67a8461da80185c9ad705fc7')
             .then((response)=> {
                setPopuler(response.data.articles.splice(1,5))
             })
             .catch((error)=> {
                console.log(error)
             })
        }
        getData()
        getPopulerData()
   }, [page])

   return (
     <>
     
     <Header />
     
     <div className="container">
        <Articles articles={data}/>
        
        <div className="row">
            <div className="col-9">
                
                <Carousel carousel={carousel} />

                <hr></hr>

                <div className="">
                    <h5 className="">Rekomendasi Untuk Anda</h5>

                    <ArticlesRecommendation articles={data}/>
                    
                    <hr></hr>
                    
                    <ArticlesRow articles={article}/>  
                </div>
            </div>
            <div className="col-3">
                <div className="mt-3">
                    <h5 className="text-blue font-bold">Berita Populer</h5>
                    
                    <PopulerArticle populers={populer} />
                </div>
                <div className="mt-3">
                    <h5 className="text-blue font-bold">Untuk Anda</h5>
                    
                    <UntukAnda untukAndas={article}/>  
                </div>    
            </div>
        </div>
    </div>


     <Footer />

     </>
   )
}

export default News