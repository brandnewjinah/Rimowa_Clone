import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

//import components
import { DropdownCategory } from "../../components/Dropdown/DropdownH";
import * as Buttons from "../../components/Buttons";
// import Specs from "./Specs";
import Spec from "./Spec";
import Carousel from "nuka-carousel";
import Accordion from "../../components/Accordion";

//import styles and assets
import styled from "styled-components";
import Colors from "../../components/Colors";
import { Heart, Store, ChevronRight } from "../../assets/Icons";

//import redux
import { connect } from "react-redux";
import { addItem } from "../../store/cart";

const ProductDetailH = (props) => {
  const [data, setData] = useState({});
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `/data/product/detail_${props.match.params.id}.json`
    );
    setData(data.data);
  };

  // const getData = async () => {
  //   const { data } = await axios.get(
  //     "http://3.34.135.207:8000/product" + props.location.search
  //   );
  //   setData(data.data);
  // };

  const goToCart = (data) => {
    // console.log(data);
    props.addItem(data);
    props.history.push("../shoppingcart");
  };

  const handleSelection = (item) => {
    let newData = { ...data, name: item.name, price: item.price };
    setData(newData);
  };

  return (
    <Wrapper>
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
                  <ChevronRight
                    width="20"
                    height="20"
                    color="#000"
                    stroke="1"
                    fill="none"
                  />
                </button>
              )}
            >
              {data.images &&
                data.images.map((c) => <img key={c.img_url} src={c.img_url} />)}
            </Carousel>
          </Image>
          <Detail>
            <div className="title">
              <h4>{data.collection}</h4>
              <h1>{data.name}</h1>
              <h3>{data.price}</h3>
            </div>
            <div className="action">
              <DropdownCategory
                data={data}
                handleSelection={(item) => handleSelection(item)}
              />
              <Buttons.Default
                label="Purchase"
                color="#0c67e7"
                onClick={() => goToCart(data)}
              />
            </div>
            <h6 className="stock">{data.stock_status}</h6>
            <div className="options">
              <div onClick={() => setWishlist(!wishlist)}>
                {wishlist ? (
                  <Heart
                    width="20"
                    height="20"
                    color="#000"
                    stroke="2"
                    fill="#000"
                  />
                ) : (
                  <Heart
                    width="20"
                    height="20"
                    color="#000"
                    stroke="1"
                    fill="none"
                  />
                )}
                <span>Add to Wishlist</span>
              </div>
              <div>
                <Store
                  width="20"
                  height="20"
                  color="#000"
                  stroke="1.125"
                  fill="none"
                />
                <span>Find in store</span>
              </div>
            </div>
            <div className="description">{data.description}</div>
            <ul className="colors">
              {data.colorVariant &&
                data.colorVariant.map((color, idx) => (
                  <li key={idx} className="swatch">
                    <img src={color.img_url} alt="" />
                  </li>
                ))}
            </ul>
          </Detail>
        </Main>
        <HLine />
        <Spec data={data} />
      </Container>
      <Accordion />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
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

  .productSliderBtn {
    display: flex;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${Colors.gray20};
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2em;

  .title {
    text-align: center;
    margin: 2.5em 0;
  }

  .action {
    width: 320px;
  }

  .stock {
    letter-spacing: 0.125rem;
    color: ${Colors.gray};
    margin: 0.75em 0;
  }

  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.75em 0;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5em;
      cursor: pointer;

      &:first-child:after {
        content: "";
        height: 20px;
        border-right: 1px solid ${Colors.lightgray};
        margin-left: 1.25em;
      }
    }

    span {
      padding-left: 0.5em;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .description {
    text-align: center;
    color: ${Colors.darkgray};
    margin: 1em 0;
  }

  .colors {
    margin: 2em 0 0;
  }

  .swatch {
    width: 35px;
    height: 35px;
    border-radius: 15%;
    display: inline-block;
    margin: 0 0.25em;

    img {
      width: 100%;
      border-radius: 15%;
      object-fit: cover;
    }
  }
`;

export default withRouter(connect(null, { addItem })(ProductDetailH));
