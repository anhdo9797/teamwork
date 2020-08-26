import React from "react";
import BuildBrands from "../../components/BuildBrands";
import News from "../../components/News";



class Home extends React.Component {
  render() {
    return (
      <div>
        <BuildBrands />
        <News />
      </div>
    );
  }
}
export default Home;
