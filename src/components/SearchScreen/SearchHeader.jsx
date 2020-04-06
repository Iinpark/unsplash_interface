import React from "react";
import { connect } from "react-redux";
import "./searchHeader.css";
import { UNAPI } from "../../BLL/index";

import HeaderListItem from "./HeaderListItem";
import { searchActions } from './../../redux/searchReducer';

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionsList: undefined,
      searchKeyword: undefined
    };
  }

  componentDidMount() {
    UNAPI.listCollections()
      .then(json => {
        return json.map(item => {
          return <HeaderListItem title={item.title} link={item.links.html} />;
        });
      })
      .then(titles => {
        this.setState({
          collectionsList: titles
        });
      });
  }

  viewCollection() {
    //TODO:навигируем на <CollectionPhotoList />;
    // и прокидываем туда пропс с json объектом
  }

  render() {
    return (
      <div className="search-header-wrapper">
        {/* <form action="submit"> */}
          <input
            className="search-text-input"
            type="text"
            placeholder="Исследуй"
            onChange={event => {
              console.log("KEYWORD", event.target.value);
              
              this.setState({ searchKeyword: event.target.value });
            }}
          />
          <button onClick={()=>{this.props.doSearch(this.state.searchKeyword)}}>
            поиск
          </button>
        {/* </form> */}
        <hr size="10" color="white" width="80%" />
        <div className="collections-list">{this.state.collectionsList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    search_results: state.search_results,
    is_pending: state.is_pending
  }
};

const mapDispatchToProps =(dispatch) =>{
  return{
    doSearch: (keyword)=>{
      dispatch(searchActions.doSearch(keyword))
    }
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
