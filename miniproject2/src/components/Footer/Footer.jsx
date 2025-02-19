import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../App.css'

const Footer = () => {
    return (
      <div className="Footer">
        <footer className="text-center text-white">
          <div className="container pt-4">
            <section className="mb-4">
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                <i className="bi bi-facebook"></i>
              </a>
  
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                <i className="bi bi-twitter"></i>
              </a>
  
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                <i className="bi bi-google"></i>
              </a>
  
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                <i className="bi bi-instagram"></i>
              </a>
  
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                <i className="bi bi-linkedin"></i>
              </a>
  
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button">
                <i className="bi bi-github"></i>
              </a>
            </section>
          </div>
  
          <div className="text-center text-dark p-3">
            © 2025 Copyright: GigFinder
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer
