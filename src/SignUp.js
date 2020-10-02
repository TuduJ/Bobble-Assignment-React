import React, { Component } from 'react';
import './styles/SignUp.css';
import facebok from './Images/fb.png';
import google from './Images/google.png';
import logo from './Images/logo.png';



export default class SignUp extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light justify-content-center shadow p-3 mb-5 bg-white rounded">
                    <a className="navbar-brand" href="#">
                    <img src={logo} className="navbar-brand" alt="" loading="lazy"/>
                    </a>
                </nav>
                
                <div className="container-sm">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8 col-12 border px-5 pb-5 shadow-sm p-3 bg-white rounded">
                            <form className="">
                                <p className="text-center pt-1"><strong>SIGN UP</strong></p>
                                <h2 className="text-center mt-5">Create your account</h2>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                               
                                <div className="d-flex flex-row">
                                    <div className="col-6 p-0 mr-1 d-flex justify-content-center">
                                        <button type="button" className="btn btn-block btn-large border shadow-sm"><img className="mr-1" src={google} alt=""/> Sign up with Google</button>
                                    </div>
                                    <div className="col-6 p-0 ml-1 d-flex justify-content-center">
                                        <button type="button" className="btn btn-block btn-large border shadow-sm"><img className="mr-1" src={facebok} alt=""/> Sign up with Facebook</button>
                                    </div>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="p-0 col-5"><hr/></div>
                                    <div className="col-2 text-center d-flex align-items-center justify-content-center">or</div>
                                    <div className="p-0 col-5"><hr/></div>
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" className="form-control mt-3" placeholder="First Name"/>
                                    <input type="text" className="form-control mt-3" placeholder="Last Name"/>
                                    <input type="email" className="form-control mt-3" placeholder="Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <input type="password" className="form-control mt-3" placeholder="Password" id="inputPassword3"/>
                                </div>
                                
                                <medium id="disclaimer" className="form-text">By clicking Sign Up, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</medium>
                                <button id="signupButton" type="submit" className="btn btn-block btn-large mt-3 py-2 shadow"><strong>SIGN UP</strong></button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
