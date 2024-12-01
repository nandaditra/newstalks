import ListArticle from "../../components/ListArticle"
import useFetchData from "../../hook/useFetchData"

const News = () => {
    const newsArticle = useFetchData("/cnn/terbaru")
    const {article, loading} = newsArticle
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

export default News