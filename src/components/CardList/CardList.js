import React from "react";
import { UNAPI } from "./../../BLL/index";

const CardList = () => {
  const triggerPhotos = () => {
    const response = UNAPI.photos()
return response.map(()=>{})
  };

  return (
    <div>
      <button onClick={UNAPI.photos()}></button>
    </div>
  );
};

export default CardList;
