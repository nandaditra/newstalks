import Skeleton from "react-loading-skeleton"

const SkeletonPopularArticle = () => {
    return (
        <div className="mt-1 mb-3">
            <div className="row">
                <div className="col-1 mr-3">
                   <Skeleton className="p-3"count={1} />
                </div>
                <div className="col-11">
                   <Skeleton count={2} />
                   <Skeleton className="my-2"count={1} />
                </div>
            </div>
        </div>
    )
}

export default SkeletonPopularArticle