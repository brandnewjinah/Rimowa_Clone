import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";

export const DropdownCategory = ({ data }) => {
  return (
    <Container>
      <Left>
        <Top>{data.collection}</Top>
        <Bottom>
          <div className="left">{data.name}</div>
          <div className="right">80x44x46 cm</div>
        </Bottom>
      </Left>
      <Right>
        <i className="fas fa-chevron-down"></i>
      </Right>
    </Container>
  );
};

export const DropdownCheck = ({
  data,
  handleSelection,
  isActive,
  selected,
}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleSelect = (name) => {
    handleSelection(name);
    handleVisible();
  };

  return (
    <div>
      <Wrapper onClick={handleVisible}>
        <Check>
          <i className="fas fa-check"></i>
        </Check>
        <Label>{selected}</Label>
        <Arrow>
          <i className="fas fa-chevron-down"></i>
        </Arrow>
      </Wrapper>
      {visible ? (
        <Dropdown>
          <ul>
            {data.map((d) => (
              <li key={d.name} onClick={() => handleSelect(d.name)}>
                {d.name}
              </li>
            ))}
          </ul>
        </Dropdown>
      ) : null}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 0.5em;
  padding: 0.4em 1em;
  border: 1px solid #dadbda;
`;

const Left = styled.div`
  margin-right: 2em;
`;
const Right = styled.div`
  margin-right: 0.5em;
`;
const Top = styled.div`
  font-size: 0.75rem;
  color: #adadad;
`;
const Bottom = styled.div`
  display: flex;

  .left {
    font-size: 1rem;
    font-weight: 300;
    margin-right: 0.8em;
  }

  .right {
    font-size: 0.875rem;
    color: #6f6f6f;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  border-radius: 0.125em;
  padding: 0 1em;
  cursor: pointer;
`;

const Check = styled.div`
  color: green;
  zoom: 70%;
`;

const Label = styled.div`
  padding: 0.75em 1em;
`;

const Arrow = styled.div`
  zoom: 75%;
`;

const Dropdown = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
  z-index: 10;

  ul {
    position: absolute;
    width: 100%;
    background-color: white;
  }

  li {
    padding: 0.75em 1em;

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
`;
