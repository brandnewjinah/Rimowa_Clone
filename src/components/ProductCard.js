import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";

const ProductCard = ({ data }) => {
  const [mainImg, setMainImg] = useState(true);

  return (
    <Container>
      <Top>
        {data.colorVariant &&
          data.colorVariant.map((c, idx) => (
            <div key={idx} className="swatch">
              <img src={c.img_url} alt="" />
            </div>
          ))}
      </Top>
      <Middle
        onMouseEnter={() => setMainImg(false)}
        onMouseLeave={() => setMainImg(true)}
      >
        {mainImg ? (
          <img src={data.img} alt="" />
        ) : (
          <img src={data.secondImg} alt="" />
        )}
      </Middle>
      <Bottom>
        <h6>{data.collection}</h6>
        <h4 className="primary">{data.name}</h4>
        <h4 className="secondary">{data.price}</h4>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f7f5f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  padding: 1.5em;

  .swatch {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0.25em;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
  }
`;

const Bottom = styled.div`
  text-align: center;
  padding: 1.5em;

  h4.primary {
    text-transform: none;
    font-weight: 400;
    letter-spacing: 0;
  }

  h4.secondary {
    text-transform: none;
    letter-spacing: 0;
  }
`;

export default ProductCard;
