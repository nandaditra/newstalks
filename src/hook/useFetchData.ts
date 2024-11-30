import { useEffect, useState } from "react";
import api from "../api/api";
import dateNow from "../util/dateNow";

const useFetchData = (key:string) => {
     const [article, setArticle] = useState<any[]>([]);
     const [loading, setLoading] = useState<boolean>(false);
     const date = dateNow();

     useEffect(()=> {
       async function fetchData() {
          setLoading(true);
          try {
            await api.get(`/search-news?text=${key}&language=en&earliest-publish-date=${date}&api-key=83ed7be80d974aad81ff6638e635dcec`)
              .then((response)=> {
                if(response) {
                  setLoading(false)
                  setArticle(response.data.news)
                  console.log(response.data.news)
                }
          })
          } catch (error) {
             console.log(error)
          }
       }
       fetchData()
     },[key, date])

     return {article, loading}
}

export default useFetchData;