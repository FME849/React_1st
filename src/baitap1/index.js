import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

class Baitap1 extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="d-flex">
                    <Content />
                    <Sidebar />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Baitap1;