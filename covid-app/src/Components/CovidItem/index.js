import React, { Component } from "react";
import "./CovidItem.css";
class CovidItem extends Component {
  render() {
    return (
      <div className="CovidItem-container">
        <div className="CovidItem-item">
          <div className="click-color color-red"></div>

          <div className="CovidItem-item-text">
            <h6>Coronavirus Cases</h6>
            <h2 className="h2-color-1">+151.0k</h2>
            <p>224.8m Total</p>
          </div>
        </div>




        <div className="CovidItem-item">
          <div className="click-color color-bleu"></div>

          <div className="CovidItem-item-text">
            <h6>Coronavirus Cases</h6>
            <h2 className="h2-color-2">+151.0k</h2>
            <p>224.8m Total</p>
          </div>
        </div>




        <div className="CovidItem-item">
          <div className="click-color color-sd"></div>

          <div className="CovidItem-item-text">
            <h6>Coronavirus Cases</h6>
            <h2 className="h2-color-3">+151.0k</h2>
            <p>224.8m Total</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CovidItem;
