import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckOutDlivery from "./CheckOutMenu/CheckOutDelivery";
import CheckOutAddr from "./CheckOutMenu/CheckOutAddr";
import CheckoutPayment from "./CheckOutMenu/CheckoutPayment";
import PostCode from "../../components/PostCode/PostCode";
import OrderSumm from "../../pages/ShoppingBag/OrderSumm";
import "./CheckOut.scss";

class CheckOut extends Component {
  state = {
    DliveryCehcked: true,
    AddrChecked: false,
    PaymentChecked: false,
    isChecked: 1,
    postChecked: false,
    postNumber: undefined,
    postAdress: undefined,
  };

  showMenu = (num) => {
    this.setState({ isChecked: num });
  };

  stepTwoChecked = () => {
    this.setState({
      isChecked: 2,
    });
  };

  stepThreeChecked = () => {
    this.setState({
      isChecked: 3,
    });
  };

  handlePostChecked = (check) => {
    this.setState({
      postChecked: check,
    });
  };

  settingPostValue = (pN, pA) => {
    this.setState({
      postNumber: pN,
      postAdress: pA,
    });
  };

  render() {
    const { isChecked, postChecked, postNumber, postAdress } = this.state;
    console.log("postChecked", postChecked);
    return (
      <div className="CheckOut" style={{ position: "relative" }}>
        {postChecked ? (
          <PostCode
            handlePostChecked={() => this.handlePostChecked(false)}
            settingPostValue={this.settingPostValue}
          />
        ) : null}
        <div className="checkOut-main">
          <section className="checkOut-mainLeft">
            <div className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={() => this.showMenu(1)}
              >
                <span className="title-number">1.</span>
                <h2>Delivery and pickup options</h2>
              </div>
              <div className={isChecked === 1 ? "block" : "none"}>
                <CheckOutDlivery stepTwoChecked={this.stepTwoChecked} />
              </div>
            </div>
            <div className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={() => this.showMenu(2)}
              >
                <span className="title-number">2.</span>
                <h2>Shipping and billing details</h2>
              </div>
              <div className={isChecked === 2 ? "block" : "none"}>
                <CheckOutAddr
                  stepThreeChecked={this.stepThreeChecked}
                  postChecked={() => this.handlePostChecked(true)}
                  postNumber={postNumber}
                  postAdress={postAdress}
                />
              </div>
            </div>
            <div name="CheckoutPaymentChecked" className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={() => this.showMenu(3)}
              >
                <span className="title-number">3.</span>
                <h2>Payment method</h2>
              </div>
              <div className={isChecked === 3 ? "block" : "none"}>
                <CheckoutPayment />
              </div>
            </div>
          </section>
          <section className="checkOut-mainRight">
            <OrderSumm />
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CheckOut;
