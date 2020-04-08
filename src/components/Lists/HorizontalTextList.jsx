import React from "react";
import TextListItem from "./../TextListItem/TextListItem";
import { connect } from "react-redux";

export default class HorizontalTextList extends React.PureComponent {
  render() {
      console.log('H TEXT LIST', this.props);
    return (
      <div>
        {this.props.data
          ? this.props.data.map(item => (
              <TextListItem itemTitle={item} />
            ))
          : "Ничего нет"}
      </div>
    );
  }
}
