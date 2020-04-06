import React from "react";
import { connect } from "react-redux";
import CardList from "../Lists/CardList";
import SearchHeader from "./SearchHeader";

class SearchResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: undefined
    };
  }
  static getDerivedStateFromProps(props) {
    return { search_results: props.search_results };
  }

  componentWillUnmount() {
    this.state.search_results = undefined 
    console.log("UNMOUNTING", this.state.search_results);
  }

  render() {
    return (
      <div>
        <SearchHeader />
        {<CardList data={this.state.search_results} /> || "Результатов нет"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search_results: state.search_results
  };
};
export default connect(mapStateToProps)(SearchResultsScreen);
