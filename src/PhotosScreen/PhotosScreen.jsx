import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import styles from "./PhotosScreen.module.css";

const photoPlaceholder =
  "https://images.unsplash.com/photo-1587013258002-b57e3cb17dea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzk3N30";

const userProfilePlacehoder =
  "https://images.unsplash.com/profile-fb-1546918339-0cab0a15f6d6.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128";

class PhotosScreen extends React.Component {


  TagList(){
    return (
      <div className={styles.relatedTags}>
        <span>Похожие теги</span>
        <div>
          <span>Пример тега</span>
        </div>
      </div>
    );
  }

  render() {
    console.log("PHOTOS SCREEN", this.props.currentPhoto);
    const json = this.props.currentPhoto;
    return (
      <div className={styles.photosScreenWrapper}>
        <div className={styles.photosScreenBackground}>
          <img
            src={photoPlaceholder} //json?.urls?.regular
            alt="beautyful background"
          />
        </div>

        <section className={styles.photosScreenOverlay}>
          <div className={styles.photoUpperButtons}>
            <div className={styles.profileInfo}>
              <img
                className={styles.profilePhoto}
                src={userProfilePlacehoder}
                alt="profile avatar"
              />
              <div className={styles.profileText}>
                <h1 className={styles.profileName}>Vadim Sadovski</h1>
                <span className={styles.profileLink}>@vadimsadovski</span>
              </div>
            </div>

            <div className={styles.upperButtons}>
              <button className={styles.upperButtonsHeart}>
                <FontAwesomeIcon color="#828282" icon={faHeart} />
              </button>
              <button className={styles.upperButtonsDownload}>Скачать</button>
            </div>
          </div>
          <img className={styles.photo} src={photoPlaceholder} alt="." />

{this.TagList()}
        
        </section>

        <section>
          <h2>Похожие фотографии</h2>
        </section>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    currentPhoto: state.photos.currentPhoto,
  };
};

export default connect(mapState)(PhotosScreen);
