import React from "react";
import CardList from "../components/Lists/CardList";
import { connect } from "react-redux";
import { photoActions } from "./../redux/photoReducer";

class HomeScreen extends React.Component {
  //infinite scroll
  observer = React.createRef(); // текущий элемент
  setLastCardRef = (node) => {
    if (node === null) return;
    if (this.observer.current) {
      this.observer.current.disconnect();
    }
    this.observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.props.increasePage();
      }
    });
    if (node) this.observer.current.observe(node);
  };

  componentDidMount() {
    if (this.props.allPhotos === undefined) {
      this.props.fetchAllPhotos();
    }
  }
  render() {
    return (
      <div>
        {(
          <CardList
            data={this.props.allPhotos}
            setLastCardRef={this.setLastCardRef}
          />
        ) || "ничего нет"}
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
      dispatch(photoActions.fetchAllPhotos());
    },
    increasePage: () => {
      dispatch(photoActions.increasePage());
    },
  };
};

export default connect(mapState, mapDispatch)(HomeScreen);
