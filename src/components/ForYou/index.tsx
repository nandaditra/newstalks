import { ForYou } from './ForYou'
import './index.css'

interface  ForYouListProps {
    forYou: ForYou[]
}

function UntukAnda({forYou}: ForYouListProps){
    return (
        <div className="my-3">
            {forYou.splice(2,4).map((article)=> (
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