import React, { useState } from "react";

//import components
import OrderSummary from "../pages/ShoppingBag/OrderSumm";

//import styles and assets
import styled from "styled-components";
import Colors from "../components/Colors";

const Checkout = () => {
  const [currindex, setCurrindex] = useState(1);

  return (
    <Wrapper>
      <Container>
        <Main>
          <div className="delivery">
            <h2 onClick={() => setCurrindex(1)}>
              1. Delivery and pickup options
            </h2>
            {currindex === 1 && (
              <div className="content">
                <h4>Select a delivery method</h4>
                <div className="method">
                  <div>
                    <p>Standard delivery</p>
                    <p>Pre-order</p>
                  </div>
                  <div>$5.00</div>
                </div>
                <button onClick={() => setCurrindex(2)}>Next Step</button>
              </div>
            )}
          </div>
          <div className="address">
            <h2 onClick={() => setCurrindex(2)}>
              2. Shipping and billing details
            </h2>
            {currindex === 2 && (
              <div>
                <button onClick={() => setCurrindex(3)}>Next Step</button>
              </div>
            )}
          </div>
          <div className="payment">
            <h2 onClick={() => setCurrindex(3)}>3. Payment method</h2>
            {currindex === 3 && (
              <div>
                <button onClick={() => setCurrindex(4)}>Next Step</button>
              </div>
            )}
          </div>
          <div className="review">
            <h2 onClick={() => setCurrindex(4)}>4. Review your order</h2>
            {currindex === 4 && <div>Content</div>}
          </div>
        </Main>
        <Right>
          <OrderSummary />
        </Right>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;

const Container = styled.main`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
`;

const Main = styled.section`
  width: 65%;

  .delivery {
    padding: 2em 0;

    .method {
      display: flex;
      justify-content: space-between;
      background-color: ${Colors.gray10};
      border: 1px solid ${Colors.gray40};
      border-radius: 0.5em;
      padding: 1em;
      margin: 2em 0;
    }
    .content {
      width: 50%;
    }
  }

  .address {
    background-color: lightcoral;
  }

  .payment {
    background-color: mistyrose;
  }

  .review {
    background-color: peachpuff;
  }
`;

const Right = styled.section`
  width: 35%;
`;

export default Checkout;
