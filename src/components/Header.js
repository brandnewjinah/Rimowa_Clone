import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

//import styles and asses
import styled from "styled-components";
import * as Typography from "./Typography";
import colors from "./Colors";

//import redux
import { connect } from "react-redux";
import { GET_TOTAL } from "../store/cart";

const Header = (props) => {
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <Flex>
        <Typography.Cap>SHIP TO FRANCE | ENGLISH</Typography.Cap>
      </Flex>
      <Logo>
        <NavLink to="/">
          <Typography.H center="center">RIMOWA</Typography.H>
        </NavLink>
      </Logo>
      <Flex>
        <Hspacing />
        {!props.user && (
          <NavLink to="/login">
            <Typography.Cap>Sign in</Typography.Cap>
          </NavLink>
        )}
        {props.user && (
          <div>
            <User>
              <div onClick={handleLogout}>
                <Typography.Cap>Hi, {props.user.name}</Typography.Cap>
              </div>
              {visible && (
                <Logout style={{ cursor: "pointer" }}>
                  <NavLink to="/logout">
                    <Typography.Cap center="center">Logout</Typography.Cap>
                  </NavLink>
                </Logout>
              )}
            </User>
          </div>
        )}
        <i className="fas fa-search"></i>
        <i className="far fa-heart"></i>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="fas fa-shopping-bag"></i>
          {props.qty === 0 ? null : (
            <div style={{ marginLeft: 5 }}>{props.qty}</div>
          )}
        </div>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 5em 0.75em;
  background-color: white;
`;

const Flex = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 20%;
`;

const Hspacing = styled.div`
  width: 20%;
`;

const User = styled.div`
  position: relative;
  cursor: pointer;
`;

const Logout = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${colors.faintgray};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #eee;
  }
`;

const mapStateToProps = (state) => {
  const { qty } = state;
  return { qty };
};

export default withRouter(connect(mapStateToProps)(Header));
