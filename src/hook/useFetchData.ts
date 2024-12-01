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
            await api.get(key)
              .then((response)=> {
                if(response) {
                  setLoading(false)
                  setArticle(response.data.data.posts)
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