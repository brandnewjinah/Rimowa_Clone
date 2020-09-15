import React from "react";

//import styles and assets
import styled from "styled-components";

export const Buttons = ({ label, onClick }) => {
  return (
    <Container>
      <button onClick={onClick}>{label}</button>
    </Container>
  );
};

export const Default = ({ color, label, onClick }) => {
  const renderStyle = {
    backgroundColor: color,
    "&:hover": {
      backgroundColor: "white",
    },
  };

  return (
    <Container>
      <button style={renderStyle} onClick={onClick}>
        {label}
      </button>
    </Container>
  );
};

// const Container = styled.div`
//   /* max-width: 500px; */
//   margin: 1.25em auto;

//   button {
//     /* background: #0c67e7; */
//     padding: 2em;

//     &:hover {
//       background: #4e8ee7;
//       transition: 0.3s ease-in-out;
//     }
//   }
// `;

const Container = styled.div`
  margin: 1.25em auto;
`;
