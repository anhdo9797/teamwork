import React from "react";
import BuildBrands from "../../components/BuildBrands";
import News from "../../components/News";
import Footer from "../../components/Footer";
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
