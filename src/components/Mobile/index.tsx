import React from "react";
import Herosection from "./Herosection";
import Header from "../Header";
import Breaking from "../Breaking";
import HowToBuyPecaToken from "./HowToBuyPecaToken";
import PecaTokenomics from "./PecaTokenomics/Index";
import PecaFaqs from "./PecaFaqs";
import RoadMap from "./RoadMap";
import Footer from "./Footer";

const MobileView = () => {
  return (
    <main className=" flex-col flex items-start justify-start md:hidden w-[100vw] overflow-x-hidden ">
      <Header />
      <Breaking />
      <Herosection />
      <HowToBuyPecaToken />
      <PecaTokenomics />
      <PecaFaqs />
          <RoadMap />
          <Footer/>
    </main>
  );
};

export default MobileView;
