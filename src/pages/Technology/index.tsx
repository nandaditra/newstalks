import Footer from "../../components/Footer";
import Header from "../../components/Header"
import ListArticle from "../../components/ListArticle";
import useFetchData from "../../hook/useFetchData";

const Technology = () => {
    const technologyArticle = useFetchData("sport", 5, 10)
    const {article, loading} = technologyArticle

    return (
        <>
        
        <Header />
        
        <main>
            <div className="container">
                 <div className="row">
                    <div className="mx-auto col-12 col-md-8">
                        <ListArticle articles={article} loading={loading}/>
                    </div>
                 </div>
            </div>
        </main>

        <Footer />

        </>
    )
}

export default Technology