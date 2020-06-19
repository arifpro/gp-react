import React from 'react'
import About from './About/About'
import Client from './Client/Client'
import Features from './Features/Features'
import Services from './Services/Services'
import CallToAction from './CallToAction/CallToAction'
import Portfolio from './Portfolio/Portfolio'
import Counts from './Counts/Counts'
import Testimonials from './Testimonials/Testimonials'
import Team from './Team/Team'
import Contact from './Contact/Contact'

function Home() {
    return (
        <main id="main">
            <About/>
            <Client/>
            <Features/>
            <Services/>
            <CallToAction/>
            <Portfolio/>
            <Counts/>
            <Testimonials/>
            <Team/>
            {/* <Contact/> */}
        </main>
    )
}

export default Home
