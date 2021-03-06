import React from 'react';

import './style.scss';

import BuildBrands from '../../components/BuildBrands';
import News from '../../components/News';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Digital from '../../components/Digital';
import { donors } from '../../assets/image';
import CreateStudio from '../../components/CreateStudio';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Header />
                <Digital />
                <div className="container" style={{ display: 'flex' }}>
                    <img className="donors" src={donors} />
                </div>
                <CreateStudio />
                <BuildBrands />
                <News />
                <Footer />
            </div>
        );
    }
}
export default Home;
