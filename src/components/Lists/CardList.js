import React from "react";
import Card from "../Card/Card.jsx";
import "./cardListStyle.css";

class CardList extends React.Component {
  render() {
    return (
      <div className="root">
        {this.props.data
          ? this.props.data.map(item => (
              <Card
                src={item.urls.small}
                altDesc={item.alt_description}
                json={item}
              />
            ))
          : null}
      </div>
    );
  }
}

export default CardList;
