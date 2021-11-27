import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Wwd from "./wwd";
import ListCard from "./list-card";
import Footer from './footer';
import Contact from "./contact";

function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <Wwd />
                    <Contact />
                </div>
                <ListCard />
            </div>
            <Footer />
        </div>
    )
}

export default Baitap2;