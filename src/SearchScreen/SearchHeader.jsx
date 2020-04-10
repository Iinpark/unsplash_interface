import React from "react";
import { connect } from "react-redux";
import "./searchHeader.css";
import { UNAPI } from "../BLL/index";

import HeaderListItem from "./HeaderListItem";
import { searchActions } from "../redux/searchReducer";
import HorizontalTextList from "../components/Lists/HorizontalTextList";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionsList: undefined,
      searchKeyword: undefined
    };
  }

  componentDidMount() {
    UNAPI.listCollections().then(json => {
      const titles = json.map(item => {
        return item.title;
      });
      this.setState({ collectionsList: titles });
    });
  }

  viewCollection() {
    //TODO:навигируем на <CollectionPhotoList />;
    // и прокидываем туда пропс с json объектом
  }

  render() {
    return (
      <div className="search-header-wrapper container-fluid">
        {/* <form action="submit"> */}
        <input
          className="search-text-input"
          type="text"
          placeholder="Исследуй"
          onChange={event => {
            this.setState({ searchKeyword: event.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.doSearch(this.state.searchKeyword);
          }}
        >
          поиск
        </button>
        {/* </form> */}
        <hr size="10" color="white" width="80%" />
        <div className="collections-list">
          {/* //TODO: сюда не прокидываются пропсы 
          так как рендер идет раньше чем делается 
          запрос на сервер в componentDidMount*/}
          <HorizontalTextList data={this.state.collectionsList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search_results: state.search_results,
    is_pending: state.is_pending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSearch: keyword => {
      dispatch(searchActions.doSearch(keyword));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
