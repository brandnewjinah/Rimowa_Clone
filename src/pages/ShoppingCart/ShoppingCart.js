import React, { useEffect } from "react";

//import components
import Footer from "../../components/Footer/Footer";
import CartHeader from "./CartHeader";
import CartMain from "./CartMain";
import CartEmpty from "./CartEmpty";

//import styles and assets
import styled from "styled-components";

//import redux
import { connect } from "react-redux";

const ShoppingCart = ({ items }) => {
  return (
    <Wrapper>
      <Container>
        <CartHeader />
        {items.length === 0 ? <CartEmpty /> : <CartMain />}
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
  padding-bottom: 4em;
`;

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
