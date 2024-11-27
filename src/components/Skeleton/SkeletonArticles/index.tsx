import Skeleton from "react-loading-skeleton"

const SkeletonArticles = () => {
    return (
        <div className="col-6 col-md-2">
            <Skeleton className="card-skeleton" count={1}/>
            <Skeleton count={2}/>
       </div>
    )
}

export default SkeletonArticles