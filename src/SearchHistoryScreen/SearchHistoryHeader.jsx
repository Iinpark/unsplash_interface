import React from "react";
import HorizontalTextList from "./../components/Lists/HorizontalTextList";
import "./historyHeader.css";
import { connect } from "react-redux";

const SearchHistoryHeader = ({search_history_list}) => {
  return (
    <div className="history-header-wrapper">
      <span className="yourQuerys">Ваши запросы</span>
      <HorizontalTextList data={search_history_list} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search_history_list: state.search_keywords,
  };
};

export default connect(mapStateToProps)(SearchHistoryHeader);
