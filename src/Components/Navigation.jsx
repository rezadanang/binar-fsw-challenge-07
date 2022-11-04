import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <nav id="navbarBinar" className="navbar navbar-expand-lg static-top">
        <div className="container">
          <Link to="/" className="square"></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-bars" /></span>
          </button>          
          <div className="collapse navbar-collapse" id="navbarsSupportedContent">
            <ul className="navbar-nav mx-auto w-100 justify-content-end">                   
              <li className="nav-item">
                <a className="nav-link" href="#Ourservice">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Whyus">Why Us</a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Testimonial">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button className="btn btn-sm btn-success">Register</button>
                </a>
              </li>
            </ul>
          </div>
        </div>    
      </nav>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-label="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto w-100 justify-content-end">                   
            <li className="nav-item">
              <a className="nav-link" href="#Ourservice">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Whyus">Why Us</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonial">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button className="btn btn-sm btn-success">Register</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
      
  )
}

export default Navigation