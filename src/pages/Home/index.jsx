import React from 'react';

import './style.scss';

import BuildBrands from '../../Components/BuildBrands';
import News from '../../Components/News';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Digital from '../../Components/Digital';
import { donors } from '../../assets/image';
import CreateStudio from '../../Components/CreateStudio';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Digital />
        <div className="container">
          <img className="donors" src={donors} />
        </div>
        <CreateStudio />
        //<BuildBrands />
       //<News />
       //<Footer />
      </div>
    );
  }
}
export default Home;
