import { Populer } from "./Populer"

interface PopulerListProps {
    populers: Populer[]
}

function PopulerArticle({populers}:PopulerListProps){
    return (
        <div>
            {populers.map((populer, index)=> (
                <div className="my-1">
                   <div className="row">
                     <div className="col-1 mr-3">
                         <h1 className="fs-5">#{index+1}</h1>
                     </div>
                     <div className="col-9">
                         <h4 className="fs-6">{populer.title.substring(0,75)}</h4>
                         <p>{populer.publishedAt}</p>
                     </div>
                   </div>
                </div>
            ))}
        </div>
    )
}

export default PopulerArticle

