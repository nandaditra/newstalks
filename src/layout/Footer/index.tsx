import { Link } from "react-router-dom"
import './index.css'

const Footer = () => {
    return (
      <footer className="bg-light">
          <div className="container">
              <div className="row py-3">
                <div className="col-12 col-md-3">
                  <Link className="mr-0 navbar-brand fw-bold fs-4" to={"/"}>
                    <span className="text-danger">NEWS</span>
                    <span className="text-primary">TALK</span>
                  </Link>
                  <p className="fs-6 justify-content lh-sm">Newstalk adalah sebuah situs web berita yang menyajikan informasi terkini, mendalam, dan terpercaya.</p>
                </div>
                <div className="col-12 col-md-3">
                  <h5 className="">Link</h5>
                  <ul className="list-style-group">
                    <li className="list-group-item bg-light"><Link className="text-black text-decoration-none" to={'/'}>Trending</Link></li>
                    <li className="list-group-item bg-light"><Link className="text-black text-decoration-none" to={'/news'}>News</Link></li>
                    <li className="list-group-item bg-light"><Link className="text-black text-decoration-none" to={'/selebrities'}>Selebrities</Link></li>
                    <li className="list-group-item bg-light"><Link className="text-black text-decoration-none" to={'/sports'}>Sports</Link></li>
                    <li className="list-group-item bg-light"><Link className="text-black text-decoration-none" to={'/technology'}>Technology</Link></li>
                  </ul>
                </div>
                <div className="col-12 col-md-3">
                   <h5 className="">Media Social</h5>
                   <ul className="list-style-group">
                    <li className="list-group-item bg-light">Facebook</li>
                    <li className="list-group-item bg-light">Instagram</li>
                    <li className="list-group-item bg-light">Twitter</li>
                    <li className="list-group-item bg-light">Tiktok</li>
                  </ul>
                </div>
                <div className="col-12 col-md-3">
                   <h5 className="">Community</h5>
                   <ul className="list-style-group">
                    <li className="list-group-item bg-light">Newstalk Community</li>
                    <li className="list-group-item bg-light">Privacy Policy</li>
                    <li className="list-group-item bg-light">Term & Condition</li>
                  </ul>
                </div>
              </div>
              <div className="py-2 text-center">Copyright 2023 - Nanda Aditya Putra</div>
          </div>
      </footer>
    )
}

export default Footer