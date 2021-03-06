import React from "react";

import styles from "./styles.css";

export default class InstagramGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classNameSuffix: "",
      modalImgIndex: -1,
      images: this.props.imagesArray || [
        "http://via.placeholder.com/100",
        "http://via.placeholder.com/150",
        "http://via.placeholder.com/200",
        "http://via.placeholder.com/250",
        "http://via.placeholder.com/300",
        "http://via.placeholder.com/350"
      ]
    };

    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNextImg = this.handleNextImg.bind(this);
    this.handlePrevImg = this.handlePrevImg.bind(this);
  }

  handleNextImg() {
    this.setState({
      modalImgIndex: (this.state.modalImgIndex + 1) % this.state.images.length
    });
  }

  handlePrevImg() {
    this.setState({
      modalImgIndex:
        (this.state.modalImgIndex - 1 + this.state.images.length) %
        this.state.images.length
    });
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 27:
        // ESC key
        this.handleModalClose();
        break;
      case 39:
        // right arrow
        this.handleNextImg();
        break;
      case 37:
        // left arrow
        this.handlePrevImg();
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  renderModal() {
    if (this.state.modalImgIndex > -1) {
      return (
        <div
          className={[
            styles["instagram-modal-viewport"],
            styles[this.state.classNameSuffix]
          ].join(" ")}
        >
          <div
            className={styles["modal-close-bar-container"]}
            onClick={this.handleModalClose}
          >
            <div className={styles["close-bar-left"]}></div>
            <div className={styles["close-bar-right"]}></div>
          </div>
          <div className={styles["modal-image-container"]}>
            <img
              src={this.state.images[this.state.modalImgIndex]}
              alt="Img"
              className={styles["modal-image"]}
            ></img>
          </div>

          <div
            onClick={this.handlePrevImg}
            className={[
              styles["modal-image-nav-container"],
              styles["prev"]
            ].join(" ")}
          >
            {"<"}
          </div>
          <div
            onClick={this.handleNextImg}
            className={[
              styles["modal-image-nav-container"],
              styles["next"]
            ].join(" ")}
          >
            {">"}
          </div>
        </div>
      );
    }
  }

  handleModalClose() {
    this.setState({
      classNameSuffix: "closed"
    });
  }

  handleImgClick(imgIndex) {
    this.setState({
      modalImgIndex: imgIndex,
      classNameSuffix: ""
    });
  }

  render() {
    return (
      <div className={styles["insta-grid-parent-wrapper"]}>
        {this.renderModal()}
        <section className={styles["insta-grid-wrapper"]}>
          <div className={styles["insta-grid"]}>
            {this.state.images.map((image, i) => {
              return (
                <div
                  key={i}
                  className={styles["insta-grid-pic-viewport"]}
                  onClick={() => this.handleImgClick(i)}
                >
                  <img
                    src={image}
                    alt="Img"
                    className={styles["insta-grid-pic-viewport-img"]}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
