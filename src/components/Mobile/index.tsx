import React from "react";
import Herosection from "./Herosection";
import Header from "../Header";
import Breaking from "../Breaking";
import HowToBuyPecaToken from "./HowToBuyPecaToken";
import PecaTokenomics from "./PecaTokenomics/Index";

const MobileView = () => {
  return (
    <main className=" flex-col flex items-start justify-start md:hidden w-full ">
      <Header />
      <Breaking />
      <Herosection />
      <HowToBuyPecaToken />
      <PecaTokenomics />
    </main>
  );
};

export default MobileView;
