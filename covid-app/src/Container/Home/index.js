import React, { Component } from 'react';
import CovidItem from '../../Components/CovidItem';
import "./Home.css"
class Home extends Component {
    render() {
        return (
            <div className="Home-comtainer">
                <CovidItem />
            </div>
        );
    }
}

export default Home;