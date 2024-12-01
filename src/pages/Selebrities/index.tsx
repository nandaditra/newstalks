import ListArticle from "../../components/ListArticle";
import useFetchData from "../../hook/useFetchData";

const Selebrities = () => {
    const selebritiesArticle = useFetchData("tempo/seleb")
    const {article, loading} = selebritiesArticle

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

export default Selebrities