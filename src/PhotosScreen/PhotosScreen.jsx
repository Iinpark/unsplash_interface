import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import styles from "./PhotosScreen.module.css";
import { photoActions } from "./../redux/photoReducer";
import CardList from "./../components/Lists/CardList";

class PhotosScreen extends React.Component {
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
    console.log("PHOTOS SCREEN", this.props.currentPhoto);
    const json = this.props.currentPhoto;
    const user = json?.user;
    return (
      <div className={styles.photosScreenWrapper}>
        <div className={styles.photosScreenBackground}>
          <img src={json?.urls?.regular} alt="beautyful background" />
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
                  @{user?.instagram_username}
                </span>
              </div>
            </div>

            <div className={styles.upperButtons}>
              <button className={styles.upperButtonsHeart}>
                <FontAwesomeIcon color="#828282" icon={faHeart} />
              </button>
              <a
                href={json?.links?.download + "?force=true"|| '#'}
                className={styles.upperButtonsDownload}
              >
                Скачать
              </a>
            </div>
          </div>
          <img className={styles.photo} src={json?.urls?.regular} alt="." />
          {this.tagList(json?.tags)}
        </section>

        <section>
          <h2>Похожие фотографии</h2>
          {this.relatedPhotos(this.props.relatedPhotos)}
        </section>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    currentPhoto: state.photos.currentPhoto,
    relatedPhotos: state.photos.relatedPhotos,
    isRelatedPhotosPending: state.photos.isRelatedPhotosPending,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getRelatedPhotos: (keyword) =>
      dispatch(photoActions.getRelatedPhotos(keyword)),
  };
};

export default connect(mapState, mapDispatch)(PhotosScreen);
