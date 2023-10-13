// import react from "react"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";

const Signup = () => {
    return (
        <>
            <Navbar />
            <>
                <div className="bubbles">
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div className="content">
                            <div className="h1 text-white">Generate Awesome Web Pages</div>

                            <div className="text my-4 text-white">
                                The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.
                            </div>
                            <div className="d-flex align-items-center pt-3 mt-4">
                                <div className="btn btn-danger rounded me-4">Learn More</div>

                            </div>
                        </div>
                        <div className="form-card">
                            <div className="card">
                                <div className="card-head bg-white">
                                    <h1 className="mt-2 text-center ">Sign Up Now </h1>

                                </div>
                                <div className="card-form">

                                    <div className="d-flex align-items-center input-field">
                                        <span className="far fa-envelope text-muted" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="d-flex align-items-center input-field">
                                        <span className="fas fa-key text-muted" />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                    <div className="d-flex align-items-center ml-4">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label className="text-muted ms-2 " htmlFor="remember">
                                            I agree to the Terms of Service.
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="button" className=" sign-hover btn " style={{ width: "340px", height:"45px" }}>
                                            Sign in
                                        </button>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3">

                                    <p className="text-center">-----------------or----------------</p>
                                        {/* <button type="button" className="btn btn-primary" style={{ width: "300px" }}>
                                            Sign in
                                        </button> */}
                                    </div>

                                    <div className="d-flex justify-content-center mt-1">
                                        <button type="button" className=" sign-hover btn" style={{ width: "340px",height:"45px" }}>
                                        Login via Twitter
                                        </button>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3">

                                    <p className="text-center">
                                    Do you have an Account?  <span className="text-success " style={{cursor:"pointer"}}>Sign In</span>
                                        
                                    </p>
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}

export default Signup;

