import React from "react";

//import styles and assets
import styled from "styled-components";
import Colors from "../../components/Colors";

const Spec = ({ data }) => {
  return (
    <Container>
      <Header>
        <h4>Key elements</h4>
        <h1>Refined to the very last detail</h1>
      </Header>
      <Detail>
        <Image>
          <div className="front">
            <div className="height">
              <div className="units">
                <div>Height</div>
                <div>{data.height}</div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={data.specImages && data.specImages[0].img_url}
                  alt=""
                />
              </div>
              <div className="width">{`Width: ${data.width}`}</div>
            </div>
          </div>
          <div className="side">
            <div>
              <img src={data.specImages && data.specImages[1].img_url} alt="" />
            </div>
            <div className="depth">
              <span>{`Depth: ${data.depth}`}</span>
            </div>
          </div>
        </Image>
        <Specs>
          <div className="title">Specifications</div>
          <ul>
            {data.specs &&
              data.specs.map((spec, idx) => (
                <li key={idx}>{`${spec.name}: ${spec.value} ${spec.unit}`}</li>
              ))}
          </ul>
          <div className="title">Materials</div>
          <ul>
            {data.materials &&
              data.materials.map((m, idx) => (
                <li key={idx}>{`${m.name}: ${m.value}`}</li>
              ))}
          </ul>
        </Specs>
      </Detail>
    </Container>
  );
};

const Container = styled.div`
  padding: 4em 0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4em;
`;
const Detail = styled.div`
  display: flex;
`;
const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 2em;

  width: 50%;
  /* background-color: gold; */

  .front {
    display: flex;
    margin: 0 0.25em;

    .height {
      height: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px solid ${Colors.gray60};
      padding-right: 1.5em;
      margin-top: 5.5em;

      .units {
        text-align: center;
        transform: rotate(-90deg);
      }
    }

    .width {
      width: 65%;
      text-align: center;
      border-top: 1px solid ${Colors.gray60};
      padding-top: 1.5em;
      margin-top: 1em;
      margin-left: 2.5em;
    }
  }

  .side {
    margin: 0 0.25em;
  }

  .depth {
    text-align: center;
    border-top: 1px solid ${Colors.gray60};
    padding-top: 1.5em;
    margin-top: 1em;
  }

  img {
    height: 400px;
  }
`;

const Specs = styled.div`
  width: 50%;
  text-transform: uppercase;
  margin-top: 4em;
  padding-left: 4em;

  .title {
    padding-bottom: 1em;
    text-transform: uppercase;
  }

  ul {
    margin-bottom: 1.5em;
  }

  li {
    color: ${Colors.gray60};
    border-top: 1px solid ${Colors.gray20};
    padding: 1em 0;
  }
`;

export default Spec;
