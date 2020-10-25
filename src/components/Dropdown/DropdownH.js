import React, { useEffect, useState } from "react";

//import styles and assets
import styled from "styled-components";
import { ChevronDown } from "../../assets/Icons";

export const DropdownCategory = ({ data, handleSelection }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setSelected(data);
  }, [data]);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleSelect = (item) => {
    setSelected(item);
    handleSelection(item);
    handleVisible();
  };

  const rotate = {
    transform: visible ? `rotate(180deg)` : `rotate(0deg)`,
    transformOrigin: `center`,
    transition: `all .25s`,
  };

  return (
    <div>
      <Border onClick={handleVisible}>
        <Left>
          <Top>{data.collection}</Top>
          <Bottom>
            <div className="left">{selected.name}</div>
            <div className="right">{selected.size}</div>
          </Bottom>
        </Left>
        <Right>
          <ArrowContainer style={rotate}>
            <ChevronDown width="20" height="20" color="#000" stroke="1" />
          </ArrowContainer>
        </Right>
      </Border>
      {visible ? (
        <Dropdown>
          <ul
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, .2)",
              borderRadius: "0.5em",
            }}
          >
            {data.variants.map((d, idx) => (
              <li
                key={idx}
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => handleSelect(d)}
              >
                <div>{d.name}</div>
                <div style={{ color: "#6f6f6f", paddingRight: ".5em" }}>
                  {d.size}
                </div>
              </li>
            ))}
          </ul>
        </Dropdown>
      ) : null}
    </div>
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
      <Flat onClick={handleVisible}>
        <Check>
          <i className="fas fa-check"></i>
        </Check>
        <Label>{selected}</Label>
        <Arrow>
          <i className="fas fa-chevron-down"></i>
        </Arrow>
      </Flat>
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
  cursor: pointer;
`;

const Border = styled(Container)`
  border-radius: 0.5em;
  padding: 0.4em 1em;
  border: 1px solid #dadbda;
`;

const Flat = styled(Container)`
  background-color: #eee;
  border-radius: 0.125em;
  padding: 0 1em;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  margin-right: 2em;
`;

const Right = styled.div`
  margin-right: 0.5em;
  display: flex;
  align-items: center;
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
    padding: 0.85em 1em;

    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
`;
