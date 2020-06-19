import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import PortfolioDetails from './components/PortfolioDetails/PortfolioDetails';
import NavbarOfPortfolio from './components/PortfolioDetails/NavbarOfPortfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Navbar/>
            <Header/>
            <Home/>
            <Footer />
          </Route>


          <Route path='/portfolio'>
            <NavbarOfPortfolio/>
            <PortfolioDetails/>
            <Footer />
          </Route>

          
          <Route path='*'>
            <PageNotFound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
