import React from "react";
import { connect } from "react-redux";
import SearchHeader from "./SearchHeader";
import CardList from "./../components/Lists/CardList";
import styles from "./searchResultsScreen.module.css";
import Placeholder from "../components/Placeholder/Placeholder";
import Preloader from './../components/Preloader/Preloader';

class SearchResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: undefined,
    };
  }
  static getDerivedStateFromProps(props) {
    return { search_results: props.search_results };
  }

  render() {
    if (this.props.isPending) {
      return <Preloader />;
    }
    return (
      <div className={styles.searchResultsScreen}>
        <SearchHeader />
        {this.state.search_results ? (
          <CardList data={this.state.search_results} />
        ) : (
          <Placeholder />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search_results: state.search.search_results,
    isPending: state.search.is_pending,
  };
};
export default connect(mapStateToProps)(SearchResultsScreen);
