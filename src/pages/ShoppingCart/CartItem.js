import React from "react";

//import styles and assets
import styled from "styled-components";

//import redux
import { connect } from "react-redux";
import { removeItem, increase, decrease } from "../../store/cart";

const CartItem = (props) => {
  const handleRemove = (data) => {
    props.removeItem(data);
  };

  const handleDecrease = (id) => {
    if (props.main.qty > 1) {
      props.decrease(id);
    }
  };

  const handleIncrease = (id) => {
    props.increase(id);
  };

  const totalPrice = () => {
    const total = props.main.price * props.main.qty;
    return total;
  };

  return (
    <Container>
      <Image>
        <img src={props.main.images[0].img_url} alt="" />
      </Image>
      <Detail>
        <h6>{props.main.collection}</h6>
        <h3>{props.main.name}</h3>
        <h6>{props.main.stock_status}</h6>
        <Price>
          <Counter>
            <div onClick={() => handleDecrease(props.main.product_id)}>-</div>
            <div>{props.main.qty}</div>
            <div onClick={() => handleIncrease(props.main.product_id)}>+</div>
          </Counter>
          <div>
            <RemoveBtn onClick={() => handleRemove(props.main)}>
              Remove
            </RemoveBtn>
            {/* <button>Remove</button> */}
          </div>
          <div>{totalPrice()}€</div>
        </Price>
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Image = styled.div`
  width: 20%;

  img {
    width: 100%;
  }
`;

const Detail = styled.div`
  width: 80%;
  padding: 1.25em;

  h6 {
    font-weight: normal;
    font-size: 11px;
    text-transform: uppercase;
  }

  h3 {
    margin: 0.5em 0;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0 0.5em 0;
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    min-width: 50px;
    text-align: center;
  }
  div:first-child {
    border: 1px solid #d1d1d1;
    cursor: pointer;
    &:hover {
      border: 1px solid black;
    }
  }

  div:nth-child(2) {
    border-top: 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;
  }

  div:last-child {
    border: 1px solid #d1d1d1;
    cursor: pointer;
    &:hover {
      border: 1px solid black;
    }
  }
`;

const RemoveBtn = styled.button`
  border: none;
  background: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const mapStateToProps = (state) => ({
  item: state.items,
});

export default connect(mapStateToProps, { removeItem, increase, decrease })(
  CartItem
);
