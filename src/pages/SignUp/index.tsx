import Footer from "../../layout/Footer"
import Header from "../../layout/Header"
import background from "../../../src/assets/images/auth/sign-in/pexels-lisa-fotios.jpg"

function SignUp(){
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
                    <div className="my-2">
                        <h1 className="fw-bold text-center">Sign Up</h1>

                        <form className="mx-5 mt-5 px-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input name="name" type="text" className="form-control"aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input name="email" type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                <input name="password" type="Password" className="form-control"aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input name="confirm-password" type="password" className="form-control" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Ingat Saya</label>
                            </div>
                            <button type="submit" className="btn btn-primary px-5">Sign Up</button>
                            <p>Sudah Punya Akun? <b>Login</b></p>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    
        <Footer />

        </>
    )
}

export default SignUp