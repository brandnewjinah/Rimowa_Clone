import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../Typography";
import colors from "../Colors";

export const InputField = ({
  error,
  name,
  placeholder,
  type,
  value,
  handleChange,
}) => {
  return (
    <Container>
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && (
        <Typography.Cap color={colors.red} center="center">
          {error}
        </Typography.Cap>
      )}
    </Container>
  );
};

export const PwInputField = ({
  error,
  name,
  placeholder,
  value,
  handleChange,
}) => {
  const [password, setPassword] = useState(true);

  const togglePw = () => {
    setPassword((password) => !password);
  };
  return (
    <Container>
      <Input
        name={name}
        type={password === true ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Toggle onClick={togglePw}>
        {password === true ? <span>Show</span> : <span>Hide</span>}
      </Toggle>
      {error && (
        <Typography.Cap color={colors.red} center="center">
          {error}
        </Typography.Cap>
      )}
    </Container>
  );
};

export const Checkbox = ({ checked, name, label, handleChecked }) => {
  return (
    <Flex>
      <div style={{ width: "5%", marginRight: 10 }}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChecked}
        />
      </div>
      <div style={{ width: "95%" }}>{label}</div>
    </Flex>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
`;

const Toggle = styled.div`
  position: absolute;
  right: 0.75em;
  top: 0.75em;
  text-transform: uppercase;
  cursor: pointer;
  color: #b2ada6;
`;

const Input = styled.input`
  width: 100%;
  /* font-size: 0.75rem; */
  border-radius: 0.25em;
  padding: 1em;
  /* margin: 0.5em 0; */
`;

const Error = styled.span`
  color: #c81f1f;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 0.125em;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
`;
