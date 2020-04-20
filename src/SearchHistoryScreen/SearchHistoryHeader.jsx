import React from "react";
import HorizontalTextList from "./../components/Lists/HorizontalTextList";
import "./historyHeader.css";


const SearchHistoryHeader = ({search_history_list}) => {
  return (
    <div className="history-header-wrapper">
      <span className="yourQuerys">Ваши запросы</span>
      <HorizontalTextList data={search_history_list} />
    </div>
  );
};


export default SearchHistoryHeader