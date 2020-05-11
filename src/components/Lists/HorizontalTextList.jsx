import React from "react";
import TextListItem from "./../TextListItem/TextListItem";
import { connect } from "react-redux";
import styles from "./HorizontalTextList.module.css";

export default class HorizontalTextList extends React.Component {
  render() {
    return (
      <ul className={styles.list}>
        {this.props.data
          ? this.props.data.map((item) => (
              <TextListItem
                itemTitle={item}
                doSearchFromKeyword={this.props.doSearchFromKeyword}
              />
            ))
          : "Ничего нет"}
      </ul>
    );
  }
}
