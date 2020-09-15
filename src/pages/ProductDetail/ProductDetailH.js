import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

//import components
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import { DropdownCategory } from "../../components/Dropdown/DropdownH";
import * as Buttons from "../../components/Buttons";
import Specs from "./Specs";
import Elements from "./Elements";
import Footer from "../../components/Footer/Footer";
import Carousel from "nuka-carousel";

//import styles and assets
import styled from "styled-components";
import "../../styles/common.scss";

//import redux
import { connect } from "react-redux";
import { addItem } from "../../store/cart";

const ProductDetailH = (props) => {
  const [data, setData] = useState({});

  const getData = async () => {
    const { data } = await axios.get("/data/test.json");
    setData(data.data);
  };

  // const getData = async () => {
  //   const { data } = await axios.get(
  //     "http://3.34.135.207:8000/product" + props.location.search
  //   );
  //   setData(data.data);
  // };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   fetch("/data/test.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // }, []);

  const goToCart = (data) => {
    // localStorage.setItem("product", data);
    props.addItem(data);
    props.history.push("./shoppingcart");
  };

  return (
    <div>
      <Wrapper>
        <Header />
        <Nav />
        <Container>
          <Main>
            <Image>
              <Carousel
                className="imgCarousel"
                renderBottomCenterControls={({ currentSlide }) => (
                  <div>{null}</div>
                )}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button className="productSliderBtn" onClick={previousSlide}>
                    <i className="fa fa-arrow-left" />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button className="productSliderBtn" onClick={nextSlide}>
                    <i className="fa fa-arrow-right" />
                  </button>
                )}
              >
                {data.images &&
                  data.images.map((c) => (
                    <img key={c.img_url} src={c.img_url} />
                  ))}
              </Carousel>
            </Image>
            <Detail>
              <div style={{ margin: "2.5em 0", textAlign: "center" }}>
                <h4>{data.collection}</h4>
                <h1>{data.name}</h1>
                <h3>{data.price} €</h3>
              </div>
              <div style={{ width: 320 }}>
                <DropdownCategory data={data} />
                {/* <Buttons label="Purchase" onClick={() => props.addItem(data)} /> */}
                <Buttons.Default
                  label="Purchase"
                  color="#0c67e7"
                  onClick={() => goToCart(data)}
                />
              </div>
              <Description>
                <h5>{data.stock_status}</h5>
                <Options>
                  <div>
                    <i className="far fa-heart"></i>
                    <span>Add to Wishlist</span>
                  </div>
                  <div>
                    <i className="fas fa-store"></i>
                    <span>Find in store</span>
                  </div>
                </Options>
                <div style={{ margin: "3em 0" }}>{data.description}</div>
                <div>
                  <img src={data.color_urls} />
                </div>
              </Description>
            </Detail>
          </Main>
          <HLine />
          <Specs />
        </Container>
        <Elements />
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
  /* background-color: gainsboro; */
`;

const Main = styled.div`
  display: flex;
  padding-bottom: 2em;
`;

const HLine = styled.div`
  border-bottom: 1px solid #eeeeee;
`;

const Image = styled.div`
  position: relative;
  width: 50%;
  padding: 8em 5em 2em 5em;
  /* background-color: gainsboro; */
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2em;
  /* background-color: floralwhite; */

  h1 {
    font-size: 2rem;
    font-weight: 300;
    margin: 0.5em 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 300;
  }

  h4 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
  }
`;

const Description = styled.div`
  text-align: center;

  h5 {
    font-size: 0.75rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75em 0;

  div {
    margin: 0 0.75em;

    &:first-child {
      border-right: 1px solid #eeeeee;
      padding-right: 1.25em;
    }
  }

  span {
    margin-left: 0.75em;
    border-bottom: 1px solid rgb(160, 160, 160);
  }
`;

export default withRouter(connect(null, { addItem })(ProductDetailH));
