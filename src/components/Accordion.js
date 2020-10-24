import React, { useState } from "react";

//import styles and assets
import styled from "styled-components";
import { Plus, Minus } from "../assets/Icons";

const data = [
  {
    title: "TSA-Approved Locks",
    desc:
      "Each of our suitcases features TSA-approved locks that can be opened by security during airline baggage checks without causing any damage.",
    img:
      "https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwf20f26b4/images/PDP-features/182005_DTL_Lock_Orig_Silver.png",
  },
  {
    title: "Flex Divider",
    desc:
      "Packed items are kept in perfect order during transit with the height adjustable Flex Divider, which can be adapted to suit your belongings.",
    img:
      "https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwc32ad23a/images/PDP-features/divider_01.png",
  },
  {
    title: "Multi Wheel System",
    desc:
      "Pioneered by RIMOWA, this high-end system guarantees stable and effortless steering thanks to ball-bearing mounted wheels with cushioned axels.",
    img:
      "https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw5f9a01f4/images/PDP-features/Wheel_06.png",
  },
];

const Accordion = () => {
  const [currindex, setCurrindex] = useState(0);

  return (
    <Outer>
      <Wrapper>
        <Left>
          {/* {idx === currindex && <img src={d.img} alt="" />} */}
          {currindex === null ? null : <img src={data[currindex].img} alt="" />}
        </Left>
        <Right>
          <Header>
            <h4>Key elements</h4>
            <h1>Engineered for travel</h1>
          </Header>
          {data.map((d, idx) => (
            <Text
              key={idx}
              onClick={() => setCurrindex(idx === currindex ? null : idx)}
            >
              <Card style={{ backgroundColor: d.color }}>
                <Title>
                  <h6>{d.title}</h6>
                  <div>
                    {idx === currindex ? (
                      <Minus width="20" height="20" color="#000" stroke="2" />
                    ) : (
                      <Plus width="20" height="20" color="#000" stroke="2" />
                    )}
                  </div>
                </Title>
                {idx === currindex && <Desc>{d.desc}</Desc>}
              </Card>
            </Text>
          ))}
        </Right>
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  width: 100%;
  background-color: #f7f5f4;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1360px;
  margin: 0 auto;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: auto;
    max-height: 500px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Header = styled.div`
  text-align: center;
  padding: 4em 0;
`;

const Text = styled.div`
  cursor: pointer;
`;

const Card = styled.div`
  flex-grow: 1;
  transition: all 2s;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  border-top: 1px solid #bababa;
`;

const Desc = styled.div`
  padding: 1.25em 0;
`;

export default Accordion;
