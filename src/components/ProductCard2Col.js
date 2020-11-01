import React from "react";

//import styles and assets
import styled from "styled-components";

const ProductCard2Col = ({ data }) => {
  return (
    <Container>
      <Top>
        <div>You may also like</div>
        <div>Cabin</div>
        <div>Discover</div>
      </Top>
      <Bottom>
        <img
          src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwb295d7a3/images/large/92553004_1.png"
          alt=""
        />
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  /* height: 300px; */
  background-color: #f7f5f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  padding: 1.5em;
  text-align: center;
`;

const Bottom = styled.div`
  text-align: center;
  padding: 1.5em;
  height: 350px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default ProductCard2Col;
