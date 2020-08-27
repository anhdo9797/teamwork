import React from "react";
import BuildBrands from "../../components/BuildBrands";
import News from "../../components/News";
import Footer from "../../components/Footer";


class Home extends React.Component {
  render() {
    return (
      <div>
        <BuildBrands />
        <News />
        <Footer /> 
      </div>
    );
  }
}
export default Home;
