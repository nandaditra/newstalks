import { UntukAndas } from "./UntukAndas"
import './index.css'

interface UntukAndaListProps {
    untukAndas: UntukAndas[]
}

function UntukAnda({untukAndas}: UntukAndaListProps){
    return (
        <div className="my-3">
            {untukAndas.splice(2,4).map((article)=> (
                <div className="row my-3">
                    <div className="col-5">
                        <img 
                            className="img-for-you" 
                            src={article.urlToImage}/>
                    </div>
                    <div className="col-7">
                        <h4 className="title-for-you">{article.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UntukAnda