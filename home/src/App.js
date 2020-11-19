import React from 'react';
import NavBar from './NavBar';
import Cards from './Cards';
import MegentoServices from './MegentoServices';
import Discuss from './Discuss';
import Subscribe from './Subscribe';
import Contact from './Contact';
import Footer from './footer'

class App extends React.Component {
  render(){
  return (
    <div className="app">
      <div className="home">
        <NavBar />
        <div className="text" >
          <p className="p1">Aalavai giving you an edge for the future of business.</p>
          <p className="p2">We believe in creating smart, integrated business models that aim at giving you the benefits of merging offline and online experiences for your customers.</p>
        </div>
      </div>
      <Cards />
      <MegentoServices />
      <Discuss />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}
}

export default App;

