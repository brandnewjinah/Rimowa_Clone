import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Registration } from "../services/userService";

//import components
import * as Input from "../components/Forms/Input";
import { DropdownCheck } from "../components/Dropdown/DropdownH";
import * as Button from "../components/Buttons";

//import styles and asses
import styled from "styled-components";
import * as Typography from "../components/Typography";
import axios from "axios";

const titles = [{ name: "Mr" }, { name: "Ms" }, { name: "Mrs" }];
const countries = [
  { name: "Australia" },
  { name: "France" },
  { name: "Italy" },
  { name: "Korea (Republic of)" },
  { name: "Taiwan" },
  { name: "United States of America" },
];

const Register = (props) => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [title, setTitle] = useState(titles[0].name);
  const [country, setCountry] = useState(countries[0].name);
  const [checked, setChecked] = useState({ personal: false, privacy: false });

  const validate = () => {
    const errors = {};
    if (account.name === "") {
      errors.name = "Name is required";
    }
    if (account.email === "") {
      errors.email = "email is required";
    }
    if (!account.email.includes("@")) {
      errors.email = "Please enter valid email address";
    }
    if (account.password === "") {
      errors.password = "password is required";
    }
    if (account.confirmPassword === "") {
      errors.confirmPassword = "password is required";
    }
    if (account.password !== account.confirmPassword) {
      errors.confirmPassword = "password doesn't match";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...account };
    userInput[input.name] = input.value;
    setAccount(userInput);
  };

  const handleTitle = (name) => {
    setTitle(name);
  };

  const handleCountry = (name) => {
    setCountry(name);
  };

  const handleChecked = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  const postData = async () => {
    try {
      const user = {
        email: account.email,
        password: account.password,
        name: account.name,
        title: title,
        country: country,
        consent: checked.personal,
      };
      console.log(user);
      // await Registration(account);
      const registerUser = await axios.post(
        "http://localhost:5000/user/signup",
        user
      );
      props.history.push("/login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("already registered");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    postData();
  };

  return (
    <Wrapper>
      <Body>
        <Container>
          <Typography.H3 center="center" uppercase="uppercase">
            Create a Rimowa Account
          </Typography.H3>
          <Vspacing />
          <form onSubmit={handleSubmit}>
            <Inputline>
              <DropdownCheck
                selected={title}
                data={titles}
                handleSelection={handleTitle}
              />
              <Hspacing />
              <Input.InputField
                name="name"
                placeholder="Name*"
                type="text"
                value={account.name}
                error={errors.name}
                handleChange={handleChange}
              />
            </Inputline>
            <Row>
              <DropdownCheck
                selected={country}
                data={countries}
                handleSelection={handleCountry}
              />
            </Row>
            <Row>
              <Input.InputField
                name="email"
                placeholder="Email Address*"
                value={account.email}
                error={errors.email}
                handleChange={handleChange}
              />
            </Row>
            <Row>
              <Input.PwInputField
                placeholder="Password*"
                name="password"
                value={account.password}
                error={errors.password}
                handleChange={handleChange}
              />
              <Typography.P center="center" color="#b2ada6">
                The password must contain at least 8 characters including 1
                number, 1 upper and 1 lower case letter
              </Typography.P>
            </Row>
            <Row>
              <Input.PwInputField
                placeholder="Confirm Password*"
                name="confirmPassword"
                value={account.confirmPassword}
                error={errors.confirmPassword}
                handleChange={handleChange}
              />
            </Row>
            <Vspacing />
            <Input.Checkbox
              name="personal"
              label="I consent to RIMOWA processing my personal data in order to send
          personalised marketing material in accordance with the consent form and
          the privacy policy."
              checked={checked.personal}
              handleChecked={handleChecked}
            />
            <Vspacing />
            <Input.Checkbox
              name="privacy"
              label="By clicking create account, I consent to the privacy policy."
              checked={checked.privacy}
              handleChecked={handleChecked}
            />
            <Vspacing />
            <Button.Default label="CREATE ACCOUNT" color="black" />
          </form>
          <Typography.P center="center" uppercase="uppercase">
            Already have an account?
          </Typography.P>
        </Container>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Body = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 4em;
`;

const Container = styled.div``;

const Inputline = styled.div`
  display: flex;
  margin: 1em 0;
`;

const Row = styled.div`
  margin: 2em 0;
`;

const Hspacing = styled.div`
  width: 1em;
`;

const Vspacing = styled.div`
  height: 1em;
`;

export default withRouter(Register);
