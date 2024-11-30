import ListArticle from "../../components/ListArticle";
import useFetchData from "../../hook/useFetchData";

const Technology = () => {
    const technologyArticle = useFetchData("sport")
    const {article, loading} = technologyArticle

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

export default Technology