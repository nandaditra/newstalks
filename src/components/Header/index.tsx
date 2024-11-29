import { Link, useNavigate } from "react-router-dom"

const Header= () => {
   const navigate = useNavigate();
   const handleSearch = async(event:React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       const target = await event.target as typeof event.target & {
         search: { value: string };
      };
      
       const keyword = target.search.value
       if(keyword) {
          navigate(`/search/${keyword}`)
       }
   }

   return (
     <header className="sticky-top bg-white">
        <nav className="container navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="mr-0 navbar-brand fw-bold" to={"/"}>
                   <span className="text-danger">NEWS</span>
                   <span className="text-primary">TALK</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                       <li className="nav-item">
                            <Link className="nav-link active" to={"/"}>Trending</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/news"}>News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/selebrities"} >Selebrities</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sports"} >Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/technology"} >Technology</Link>
                        </li>
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                  </ul>
                </div>
            </div>
            </nav>
     </header>
   )
}

export default Header