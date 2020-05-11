import React from "react";
import { connect } from "react-redux";
import styles from "./searchHeader.module.css";
import { UNAPI } from "../BLL/index";

import HeaderListItem from "./HeaderListItem";
import { searchActions } from "../redux/searchReducer";
import HorizontalTextList from "../components/Lists/HorizontalTextList";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionsList: undefined,
      searchKeyword: "",
      search_history_list: "",
    };
  }

  componentDidMount() {
    UNAPI.listCollections().then((json) => {
      const titles = json.map((item) => {
        return item.title;
      });
      this.setState({ collectionsList: titles });
    });
    this.setState({ search_history_list: this.props.search_history_list });
  }

  doSearchFromKeyword(keyword) {
    this.setState({ searchKeyword: keyword }, () => {
      this.handleEnter();
    });
  }

  handleEnter() {
    this.props.doSearch(this.state.searchKeyword);
  }

  render() {
    return (
      <div className={styles.searchHeaderWrapper}>
        <form onSubmit={this.handleEnter.bind(this)}>
          <input
            className={styles.searchTextInput}
            type="search"
            results="2"
            placeholder="Поиск"
            onChange={(event) => {
              this.setState({ searchKeyword: event.target.value });
            }}
          />
        </form>
        <hr size="10" color="white" width="80%" />
        <div className={styles.collectionsList}>
          {/* TODO:Сделать чипсы с результатами поиска */}
          <HorizontalTextList
            data={this.state.search_history_list}
            doSearchFromKeyword={this.doSearchFromKeyword.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search_results: state.search.search_results,
    is_pending: state.search.is_pending,
    search_history_list: state.search.search_keywords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doSearch: (keyword) => {
      dispatch(searchActions.doSearch(keyword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
