import ListArticle from "../../components/ListArticle";
import useFetchData from "../../hook/useFetchData";

const Sports = () => {
    const sportsArticle = useFetchData("sport", 5, 10)
    const {article, loading} = sportsArticle
   
    return (
        <main>
            <div className="container">
                 <div className="row">
                    <div className="mx-auto col-12 col-md-8">
                        <ListArticle articles={article} loading={loading}/>
                    </div>
                 </div>
            </div>
        </main>
    )
}

export default Sports