import React from "react";
import CardOverlay from "./CardOverlay";
import styles from "./cardStyle.module.css";

export default class Card extends React.Component {
  state = {
    isImageLoaded: false,
    visibility: { visibility: "hidden" },
  };
  render() {
    const { src, altDesc, json, setRef } = this.props;
    return (
      <figure
        className={styles.wrapper}
        ref={(el) => {
          if (setRef) {
            setRef(el);
          }
        }}
      >
        <div className={styles.card}>
          <img
            src={src}
            alt={altDesc}
            className={styles.image}
            style={this.state.visibility}
            onLoad={() => {
              this.setState({
                isImageLoaded: true,
                visibility: { visibility: "visible" },
              });
            }}
          />
          <div className={styles.informationOverlay}>
            <CardOverlay json={json} />
          </div>
        </div>
      </figure>
    );
  }
}
