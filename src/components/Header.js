import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

//import styles and asses
import styled from "styled-components";
import * as Typography from "./Typography";
import colors from "./Colors";

const HeaderH = (props) => {
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
        <i className="fas fa-shopping-bag"></i>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 5em 0.75em;
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
  border: 1px solid ${colors.lightgray};

  &:hover {
    background-color: #eee;
  }
`;

export default withRouter(HeaderH);
