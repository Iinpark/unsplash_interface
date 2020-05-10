import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import styles from "./PhotosScreen.module.css";
import { photoActions } from "./../redux/photoReducer";
import CardList from "./../components/Lists/CardList";
import InstagramLink from "../components/InstagramLink/InstagramLink";
import Preloader from "./../components/Preloader/Preloader";
import ImgWithPreloader from "../components/ImgWithPreloader/ImgWithPreloader";

class PhotosScreen extends React.PureComponent {
  state = {
    isImageLoaded: false,
    visibility: { visibility: "hidden" },
  };

  tagList(tags) {
    return (
      <div className={styles.relatedTags}>
        <span>Похожие теги</span>
        <div>
          {tags ? (
            tags.map((tag) => {
              return (
                <span style={{ display: "flexbox", width: "fit-content" }}>
                  {tag.title}
                </span>
              );
            })
          ) : (
            <h2>Грузимся</h2>
          )}
        </div>
      </div>
    );
  }



  relatedPhotos(data) {
    return <CardList data={data} />;
  }

  render() {
    if (this.props.isCurrentPhotoPending) {
      return <Preloader />
    }
    console.log("PHOTOS SCREEN", this.props.currentPhoto);
    const json = this.props.currentPhoto;
    const user = json?.user;
    const src = this.props.currentPhoto?.urls?.regular;
    return (
      <div className={styles.photosScreenWrapper}>
        <section className={styles.photosWrapper}>
          <div className={styles.photosScreenBackground}>
            <img src={json?.urls?.regular} alt="beautiful background" />
          </div>
          <section className={styles.photosScreenOverlay}>
            <div className={styles.photoUpperButtons}>
              <div className={styles.profileInfo}>
                <img
                  className={styles.profilePhoto}
                  src={user?.profile_image.medium}
                  alt="profile avatar"
                />
                <div className={styles.profileText}>
                  <h1 className={styles.profileName}>{user?.username}</h1>
                  <span className={styles.profileLink}>
                    <InstagramLink
                      instagram_username={user?.instagram_username}
                    />
                  </span>
                </div>
              </div>

              <div className={styles.upperButtons}>
                <button className={styles.upperButtonsHeart}>
                  <FontAwesomeIcon color="#828282" icon={faHeart} />
                </button>
                <a
                  href={json?.links?.download + "?force=true" || "#"}
                  className={styles.upperButtonsDownload}
                >
                  <FontAwesomeIcon color="white" icon={faDownload} />
                  <span>Скачать</span>
                </a>
              </div>
            </div>
            <ImgWithPreloader src={src} />
            {/*
            TODO: Нормальные теги
            {this.tagList(json?.tags)} */}
          </section>
        </section>
        <section className={styles.relatedPhotos}>
          <h2>Похожие фотографии</h2>
          {this.relatedPhotos(this.props.relatedPhotos)}
        </section>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    currentPhoto: state.photosScreen.currentPhoto,
    relatedPhotos: state.photosScreen.relatedPhotos,
    isRelatedPhotosPending: state.photosScreen.isRelatedPhotosPending,
    isCurrentPhotoPending: state.photosScreen.isCurrentPhotoPending,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getRelatedPhotos: (keyword) =>
      dispatch(photoActions.getRelatedPhotos(keyword)),
  };
};

export default connect(mapState, mapDispatch)(PhotosScreen);
