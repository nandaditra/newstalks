import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (key:string, first:number, second:number) => {
     const [article, setArticle] = useState<any[]>([]);
     const [loading, setLoading] = useState<boolean>(false);

     useEffect(()=> {
       async function fetchData() {
          setLoading(true);
          try {
            await axios.get(`https://newsapi.org/v2/everything?q=${key}&apiKey=082fa67973a5461cad981bea600133b5`)
              .then((response)=> {
                if(response) {
                  setLoading(false)
                  setArticle(response.data.articles.splice(first,second))
                }
            })
          } catch (error) {
             console.log(error)
          }
       }
       fetchData()
     },[first, key, second])

     return {article, loading}
}

export default useFetchData;