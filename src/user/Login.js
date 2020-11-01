import React, { useState } from "react";
import { Signin } from "../services/authService";
import { withRouter } from "react-router-dom";

//import components
import Footer from "../components/Footer/Footer";
import { InputField, PwInputField } from "../components/Forms/Input";

//import styles and assets
import styled from "styled-components";
import axios from "axios";

const Loginh = (props) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (account.email === "") {
      errors.email = "Email is required";
    }
    if (account.password === "") {
      errors.password = "password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...account };
    userInput[input.name] = input.value;
    setAccount(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    //call server
    postData();
  };

  const postData = async () => {
    try {
      const user = {
        email: account.email,
        password: account.password,
      };
      const { data: jwt } = await axios.post(
        "http://localhost:5000/user/login",
        user
      );
      console.log(jwt);
      localStorage.setItem("token", jwt.token);
      // props.history.push("/");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("invalid user");
      }
    }
  };

  const handleRegister = () => {
    props.history.push("/register");
  };

  return (
    <Wrapper>
      <Container>
        <Section>
          <h3>Sign in to your acocunt</h3>
          <p>
            If you already have a Rimowa account, please sign in. We'll use your
            existing details for a speedier checkout.
          </p>
          <form onSubmit={handleSubmit}>
            <Row>
              <InputField
                name="email"
                error={errors.email}
                placeholder="Email Address*"
                type="text"
                value={account.email}
                handleChange={handleChange}
              />
            </Row>
            <Row>
              <PwInputField
                name="password"
                error={errors.password}
                placeholder="Password*"
                value={account.password}
                handleChange={handleChange}
              />
            </Row>
            <button>Sign In</button>
          </form>
        </Section>
        <Section>
          <h3>Don't have an account?</h3>
          <p>Creating a RIMOWA account lets you:</p>
          <ul className="pitchLine">
            <li>ADD ITEMS TO YOUR WISHLIST</li>
            <li>GET PERSONALISED RECOMMENDATIONS</li>
            <li>CHECK OUT MORE QUICKLY</li>
            <li>TRACK YOUR ORDERS</li>
            <li>REGISTER MY RIMOWA</li>
          </ul>
          <button className="createAccBtn" onClick={handleRegister}>
            Create Account
          </button>
        </Section>
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #fbfaf9;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1360px;
  font-family: "Work Sans", sans-serif;
  margin: 0 auto;
`;

const Row = styled.div`
  margin: 2em 0;
`;

const Section = styled.div`
  width: 50%;
  text-align: center;
  padding: 6em;

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 1em 0;
  }

  p {
    margin: 1em 0;
  }

  button {
    margin-top: 2em;
  }
`;

export default withRouter(Loginh);
