import React from 'react'
import './PortfolioDetails.css'

import 'owl.carousel';
import portfolioDetails1 from '../../img/portfolio/portfolio-details-1.jpg'
import portfolioDetails2 from '../../img/portfolio/portfolio-details-2.jpg'
import portfolioDetails3 from '../../img/portfolio/portfolio-details-3.jpg'



function PortfolioDetails() {
    return (
        <div>
            
        <main id="main">

        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <div class="d-flex justify-content-between align-items-center">
              <h2>Portfolio Details</h2>
              <ol>
                <li><a href="/" style={ { color: '#ffd584' }}>Home</a></li>
                <li>Portfolio Details</li>
              </ol>
            </div>
    
          </div>
        </section>
        {/* End Breadcrumbs */}
    
        {/* ======= Portfolio Details Section ======= */}
        <section id="portfolio-details" class="portfolio-details">
          <div class="container" data-aos="fade-up">
    
            <div class="carousel portfolio-details-container">
            
            {/* Problem with owl-carousel */}
              <div class="portfolio-details-carousel">
                <img src={portfolioDetails1} class="img-fluid" alt=""/>
                {/* <img src={portfolioDetails2} class="img-fluid" alt=""/> */}
                {/* <img src={portfolioDetails3} class="img-fluid" alt=""/> */}
              </div>
    
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category</strong>: Web design</li>
                  <li><strong>Client</strong>: ASU Company</li>
                  <li><strong>Project date</strong>: 01 March, 2020</li>
                  <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                </ul>
              </div>
    
            </div>
    
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
              </p>
            </div>

          </div>
        </section>
        {/* End Portfolio Details Section */}
    
      </main>
      </div>
    )
}

export default PortfolioDetails
