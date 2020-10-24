import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MainWrapper from "../Main/MainWrapper";
import "./UniqueMain.scss";

class UniqueMain extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("./data/taek2data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.products }));
  }

  goToTag = () => {
    this.props.history.push("/Uniquetag");
  };

  goToLuggage = () => {
    this.props.history.push("/productList");
  };

  goToAcc = () => {
    this.props.history.push("/accList");
  };

  render() {
    return (
      <div className="UniqueMain">
        {/* <div className="unHeader">
          <div className="HeaderStyle">
            <Header />
          </div>
          <div className="NavStyle">
            <Nav />
          </div>
        </div> */}
        <div className="unHero">
          <video
            autoPlay
            loop
            muted
            src="https://player.vimeo.com/external/374678558.hd.mp4?s=05a79d933175820bb407e32beafb744785363798&amp;profile_id=175"
            type="video/mp4"
            className="unHeroVideo"
          ></video>
          <div className="heroMsg">
            <h6 className="heroSubHeader upper">Rimowa Unique</h6>
            <h1 className="heroHeader">Make your own RIMOWA</h1>
            <div className="heroBtn" onClick={this.goToTag}>
              <p>CUSTOMISE</p>
            </div>
          </div>
        </div>
        <div className="unWrapper">
          <div className="unPitch">
            <h1 className="pitchHeader">RIMOWA UNIQUE</h1>
            <div className="pitchBody">
              <p>
                This is your chance to put your own spin on your suitcase. Use
                the RIMOWA UNIQUE customisation service and configurator to
                choose from a range of colourful accents and accessories to
                distinguish your RIMOWA Classic case on the go.
              </p>
            </div>
          </div>
          <div className="unHow">
            <h1 className="howHeader">HOW IT WORKS</h1>
            <div className="unHow1 flexCenter">
              <div className="unImgWrapper">
                <div className="unImg1"></div>
              </div>
              <div className="unDes">
                <h2 className="unDesHeader">Start with the Classic Cabin</h2>
                <div className="unHowBody">
                  <p>
                    Choose a RIMOWA Classic Cabin to custom build your suitcase.
                  </p>
                </div>
              </div>
            </div>
            <div className="unHow2 flexCenter">
              <div className="unDes">
                <h2 className="unDesHeader">
                  Create a look that is uniquely yours
                </h2>
                <div className="unHowBody">
                  <p>
                    Customise your travels by adding pops of colour to your
                    RIMOWA Classic's wheels and handles.
                  </p>
                </div>
              </div>
              <div className="unImgWrapper">
                <div className="unImg2"></div>
              </div>
            </div>
            <div className="unHow3 flexCenter">
              <div className="unImgWrapper">
                <div className="unImg3"></div>
              </div>

              <div className="unDes">
                <h2 className="unDesHeader">Add a personal finishing touch</h2>
                <div className="unHowBody">
                  <p>
                    Initial your leather luggage tag to ensure your RIMOWA
                    always stays by your side.
                  </p>
                </div>
              </div>
            </div>
            <button className="unGetStartedBtn" onClick={this.goToTag}>
              Get Started
            </button>
          </div>
          <div className="unSticker" onClick={this.goToLuggage}>
            <h6 className="upper">Sticker Collection</h6>
            <h2 className="unTitle">Trace your jorney with stickers</h2>
            <div className="unLink upper">Discover</div>
            <div className="unStickerImg">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwf5fd0190/images/mozaic_horizontal/Stickers.png"
                alt=""
              />
            </div>
          </div>
          <div className="unAccessories flex">
            <div className="left" onClick={this.goToTag}>
              <h6 className="upper">Accessories</h6>
              <h2 className="unTitle">Personalise your tag</h2>
              <div className="unLink upper">Discover</div>
              <div className="unTag"></div>
            </div>
            <div className="right" onClick={this.goToAcc}>
              <div className="unAccHeader">
                <h6 className="upper">Accessories</h6>
                <h2 className="unTitle">Choose a wheel colour</h2>
                <div className="unLink upper">Discover</div>
              </div>
              <div className="unWheel"></div>
            </div>
          </div>
          <div className="main-slider">
            <div className="main-slider-title">
              <h6 className="upper">EXPLORE COLLECTIONS</h6>
              <h2 className="unTitle">
                The perfect suitcase, 120 years in the making
              </h2>
            </div>
            <div className="main-wrapper">
              {this.state.data.map((product) => {
                return (
                  <MainWrapper
                    collection={product.collection}
                    img_url={product.img_url}
                    title={product.title}
                    colorPalette={product.colorPalette}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(UniqueMain);
