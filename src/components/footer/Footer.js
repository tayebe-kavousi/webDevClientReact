import React from 'react'
import {FaTwitter} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithubAlt} from "react-icons/fa";
import {FaBeer} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {Link} from 'react-router-dom';
import './Footer.css'


function Footer() {
    return (
        <footer className="text-center text-white footer" >
            <div className="container">
            <section className="mt-5">
                <div className="row text-center d-flex justify-content-center pt-5">
                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                    <Link className="text-white" to="/home">Home</Link>
                    </h6>
                </div>
                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                    <Link className="text-white" to="/Register">Sign Up</Link>
                    </h6>
                </div>
                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                    <Link className="text-white" to="/Course">Explore Courses</Link>
                    </h6>
                </div>
                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">About Us</a>
                    </h6>
                </div>
                <div className="col-md-2">
                    <h6 className="text-uppercase font-weight-bold">
                    <a href="#!" className="text-white">Contact</a>
                    </h6>
                </div>
                </div>
            </section>
            <hr className="my-5" />
            <section className="mb-5">
                <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                <h3> Have a <FaBeer/> and check out my other pages </h3>
                </div>
                </div>
            </section>
            <section className="text-center mb-5">
                <a href="https://github.com/tayebe-kavousi" className="text-white me-4">
                <FaGithubAlt className="socialIcon"/>
                </a>
                <a href="https://www.linkedin.com/in/teya-kavousi/" className="text-white me-4">
                <FaLinkedinIn className="socialIcon"/>
                </a>
                <a href="tayebekavousi68@gmail.com" className="text-white me-4">
                <SiGmail className="socialIcon"/>
                </a>
                <a href="https://twitter.com/KavousiTayebe" className="text-white me-4">
                <FaTwitter className="socialIcon"/>
                </a>
            </section>
            </div>
            <div className="text-center p-3"> © 2021 Copyright:
            <Link className="text-white" to="/home">Tayebe Kavousi</Link>
            </div>
        </footer>
)}

export default Footer
