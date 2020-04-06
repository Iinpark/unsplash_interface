import React from "react";
import CardList from "../components/Lists/CardList";
import { UNAPI } from "./../BLL/index";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched_photos: undefined
    };
  }

  componentDidMount() {
    UNAPI.photos().then(resp => {
      this.setState({ fetched_photos: resp });
    });
  }

  render() {
    return (
      <div>{<CardList data={this.state.fetched_photos} /> || "ничего нет"}</div>
    );
  }
}
