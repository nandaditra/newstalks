import { useEffect, useState } from "react";
import './index.css'
import Footer from "../../layout/Footer"
import Header from "../../layout/Header"
import images from "../../assets/images/profile/mock-profile.png"
import { mockProfile } from "./mock-profile";

function Profile(){
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [handphone, setHandphone] = useState("");
    const [country, setCountry] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [city, setCity] = useState("");

    useEffect(()=> {
        async function getDataProfile(){
             if(mockProfile != null) {
                setId(mockProfile.id)
                setFirstName(mockProfile.firstName)
                setLastName(mockProfile.lastName)
                setEmail(mockProfile.email)
                setPassword(mockProfile.password)
                setHandphone(mockProfile.handphone || "")
                setCountry(mockProfile.country || "")
                setUrlImage(mockProfile.urlImage || "")
                setCity(mockProfile.city || "")
             } 
        }
        getDataProfile()
    }, [])

     const handleSubmitForm = () => {
         
     }

     return (
        <>
        
        <Header />

        <div className="container-body">
            <form onSubmit={handleSubmitForm}>
                <div className="row">
                     <div className="col-4">
                          <img 
                             src={urlImage ? urlImage : images}
                             className="w-100 rounded-circle"
                             alt=""/>
                          
                          <button className="btn btn-primary w-100" type="submit">Upload</button>
                     </div>
                     <div className="col-8">
                        <div className="row mb-3">
                            <div className="col-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                                <input name="firstName" type="text" className="form-control" value={firstName}/> 
                            </div>
                            <div className="col-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                                <input name="lastName" type="text" className="form-control" value={lastName}/> 
                            </div>
                        </div>
                        <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input name="email" type="email" className="form-control"  value={email} aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name="password" type="password" className="form-control"  value={password} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Handphone</label>
                            <input name="handphone" type="text" className="form-control" value={handphone} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                            <input name="country" type="text" className="form-control" value={country} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                            <input name="city" type="text" className="form-control" value={city}/>
                        </div>

                        <div className="float-end">
                            <button type="button" className="btn btn-danger px-4 me-2">Back</button>
                            <button type="submit" className="btn btn-primary px-4">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
 
        <Footer />

        </>
    )
} 

export default Profile