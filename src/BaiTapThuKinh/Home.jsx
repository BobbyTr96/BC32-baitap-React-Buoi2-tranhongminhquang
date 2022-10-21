import React, { Component } from "react";
import Card from "./Card";
import "./home.css";
import ListItem from "./ListItem";
import data from "./data.json";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glasses: data,
      chooseItem: {},
    };
  }

  handleChoose = (item) => {
    this.setState({ chooseItem: item });
  };

  render() {
    return (
      <div id="home">
        <div className="overlay"></div>
        <div className="wrapper">
          <div className="inner">
            <div className="header">
              <h1>TRY GLASSES APP ONLINE</h1>
            </div>
            <Card item={this.state.chooseItem} />
            <ListItem items={data} chooseGlasse={this.handleChoose} />
          </div>
        </div>
      </div>
    );
  }
}
