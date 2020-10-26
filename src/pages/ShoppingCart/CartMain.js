import React from "react";

//import components
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

//import styles and assets
import styled from "styled-components";

//import redux
import { connect } from "react-redux";

const CartMain = (props) => {
  return (
    <Container>
      <List>
        {props.items.map((item, idx) => (
          <CartItem key={idx} main={item} />
        ))}
      </List>
      <Total>
        <CartTotal />
      </Total>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
`;

const List = styled.div`
  flex: 1;
  width: 60%;
  margin-right: 2.5%;
`;
const Total = styled.div`
  width: 30%;
  margin-left: 2.5%;
`;

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(CartMain);
