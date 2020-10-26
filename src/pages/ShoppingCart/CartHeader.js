import React from "react";
import { connect } from "react-redux";

//import styles and assets
import styled from "styled-components";

//import redux
import { getTotal } from "../../store/cart";

const CartHeader = (props) => {
  return (
    <Container>
      <h4>Your Shopping Bag {props.qty}</h4>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  text-align: center;
  margin: 3em 0;

  h4 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
  }
`;

const mapStateToProps = (state) => {
  return {
    qty: state.qty,
  };
};

export default connect(mapStateToProps, { getTotal })(CartHeader);
