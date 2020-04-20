import React from "react";
import SearchHistoryHeader from "./SearchHistoryHeader";
import { connect } from "react-redux";
import Placeholder from "./../components/Placeholder/Placeholder";

class SearchHistoryScreen extends React.Component {
  render() {
    console.log("SearchHistoryScreen", this.props);
    const list = this.props.search_history_list;
    return list.length === 0 ? (
      <Placeholder />
    ) : (
      <SearchHistoryHeader search_history_list={list} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search_history_list: state.search.search_keywords,
  };
};

export default connect(mapStateToProps)(SearchHistoryScreen);
