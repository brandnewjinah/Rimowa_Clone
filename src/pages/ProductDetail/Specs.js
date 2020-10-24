import React from "react";

//import styles and assets
import styled from "styled-components";
import "./ProductDetail.scss";
import OrigTrunkPF from "../../images/Orig_Trunk_PF.jpg";
import OrigTrunkPS from "../../images/Orig_Trunk_PS.jpg";

const Specs = () => {
  return (
    <Container>
      <Title>
        <h4>Specifications</h4>
        <h1>Refined to the very last detail</h1>
      </Title>

      <Main>
        <Image>
          <div className="specWire flexEnd">
            <div className="wireLeft flex">
              <div className="specHeight flexColumnCenter">
                <div className="height">
                  <div className="center">Height</div>
                  <div className="center">80CM</div>
                </div>
              </div>
              <div>
                <img src={OrigTrunkPF} alt="" />
                <div className="specWidth flexJustifyCenter">
                  <div className="width">
                    <span>Width</span>
                    <span>43.5 CM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wireRight">
              <img src={OrigTrunkPS} alt="" />
              <div className="specDepth flexJustifyCenter">
                <div className="depth">
                  <span>Depth</span>
                  <span>43.5 CM</span>
                </div>
              </div>
            </div>
          </div>
        </Image>
        <div className="specDetails">
          <div className="specTitle">Specifications</div>
          <ul>
            <li>WEIGHT: 4,3 KG</li>
            <li>VOLUME: 35 L</li>
          </ul>
          <div className="specTitle">Materials</div>
          <ul>
            <li>OUTSIDE : ALUMINIUM</li>
            <li>INSIDE : POLYESTER / LEATHER</li>
            <li>HANDLES : PLASTIC</li>
            <li>WHEELS: HARD PLASTIC</li>
          </ul>
        </div>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 4em 0;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin: 4em 0;

  h1 {
    font-size: 2rem;
    font-weight: 300;
    margin: 1em 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.1875rem;
  }
`;

const Main = styled.div`
  display: flex;
`;

const Image = styled.div`
  width: 50%;
`;

export default Specs;
