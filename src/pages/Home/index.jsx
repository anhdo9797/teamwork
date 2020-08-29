import React from 'react';
import BuildBrands from '../../Components/BuildBrands';
import News from '../../Components/News';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BuildBrands />
                <News />
                <Footer />
            </div>
        );
    }
}
export default Home;
