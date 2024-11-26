import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchData = (key:string, first:number, second:number) => {
     const [article, setArticle] = useState<any[]>([]);
     const [loading, setLoading] = useState<boolean>(false);

     useEffect(()=> {
       async function fetchData() {
          setLoading(true);
          try {
            await api.get(`/everything?q=${key}`)
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