import React from "react";
import CardList from "../components/Lists/CardList";
import { connect } from "react-redux";
import { UNAPI } from "./../BLL/index";
import { fetchPhotoActions } from "./../redux/photoReducer";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchAllPhotos();
  }
  render() {
    console.log("HOME SCREEN", this.props);

    return (
      <div>
        {<CardList data={this.props.allPhotos} /> || "ничего нет"}
        <button
          onClick={() => {
            this.props.fetchAllPhotos();
          }}
        >Скачать Фото</button>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("STATE", state);
  return {
    allPhotos: state.photos.allPhotos,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllPhotos: () => {
      dispatch(fetchPhotoActions.fetchAllPhotos());
    },
  };
};

export default connect(mapState, mapDispatch)(HomeScreen);
