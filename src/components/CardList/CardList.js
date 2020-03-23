import React from "react";
import { UNAPI } from "../../BLL/index";
import Card from "../Card/Card.jsx";
import "./cardListStyle.css";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: undefined
    };
  }

  componentDidMount() {
    const response = UNAPI.photos();
    console.log("TYPEOF RESPONSE before", response);
    response.then(resp => {
      console.log("INSIDE OF THEN", resp);
      const out = resp.map(item => (
        <Card
          src={item.urls.small}
          altDesc={item.alt_description}
          json={item}
        />
      ));
      this.setState({ cards: out });
    });
  }
  render() {
    return <div className="root">{this.state.cards}</div>;
  }
}

export default CardList;
