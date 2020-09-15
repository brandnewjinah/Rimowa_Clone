import React from "react";

//import styles and assets
import styled from "styled-components";

export const H = ({ children, center, uppercase }) => {
  return (
    <div>
      <Header style={{ textAlign: center, textTransform: uppercase }}>
        {children}
      </Header>
    </div>
  );
};

export const H3 = ({ children, center, uppercase }) => {
  return (
    <div>
      <h3 style={{ textAlign: center, textTransform: uppercase }}>
        {children}
      </h3>
    </div>
  );
};

export const P = ({ children, center, uppercase, color }) => {
  return (
    <div>
      <p style={{ textAlign: center, textTransform: uppercase, color: color }}>
        {children}
      </p>
    </div>
  );
};

export const Cap = ({ children, center, uppercase, color }) => {
  return (
    <div>
      <Caption
        style={{ textAlign: center, textTransform: uppercase, color: color }}
      >
        {children}
      </Caption>
    </div>
  );
};

const Header = styled.h1`
  font-size: 1.7rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

const Caption = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
`;
