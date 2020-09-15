import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

//import components
import * as Buttons from "../../components/Buttons";

//import styles and assets
import styled from "styled-components";

//import redux
import { connect } from "react-redux";
import { GET_TOTAL } from "../../store/cart";

const CartTotal = (props) => {
  useEffect(() => {
    props.dispatch({ type: GET_TOTAL });
  }, [props.items, props.dispatch]);

  const goToCheckout = () => {
    props.history.push("./CheckOut");
  };

  return (
    <Container>
      <Flex>
        <h5>Subtotal</h5>
        <h5>{props.total}€</h5>
      </Flex>
      <Flex>
        <h5>Shipping</h5>
        <h5>FREE</h5>
      </Flex>
      <Flex>
        <h3>Estimated Total</h3>
        <h3>{props.total}€</h3>
      </Flex>
      <Buttons.Buttons label="Checkout" onClick={() => goToCheckout()} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1.25em;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    font-size: 0.875rem;
    margin: 0.5em 0;
  }

  h3 {
    font-size: 1rem;
    margin: 0.5em 0;
  }
`;

const mapStateToProps = (state) => {
  const { total, items } = state;
  return { total, items };
};

export default withRouter(connect(mapStateToProps)(CartTotal));
