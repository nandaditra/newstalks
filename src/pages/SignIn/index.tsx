import Footer from "../../layout/Footer"
import Header from "../../layout/Header"
import background from "../../../src/assets/images/auth/sign-in/pexels-lisa-fotios.jpg"

function SignIn(){
    return (
        <>
        
        <Header />

        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <img 
                        src={background}
                        className="w-100" 
                    />
                </div>
                <div className="col-6">
                    <div className="my-5">
                        <h1 className="fw-bold text-center">Sign In</h1>

                        <form className="mx-5 mt-5 px-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control"aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Ingat Saya</label>
                            </div>
                            <button type="submit" className="btn btn-primary px-5">Sign In</button>
                            <p>Belum Punya Akun? <b>Sign Up</b></p>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    
        <Footer />

        </>
    )
}

export default SignIn