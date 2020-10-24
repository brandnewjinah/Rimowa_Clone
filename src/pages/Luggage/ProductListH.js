import React, { useEffect, useState } from "react";
import axios from "axios";

//import components
import ProductCard from "../../components/ProductCard";

//import styles and assets
import styled from "styled-components";

const ProductListH = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("/data/list.json");
    setData(data.products);
  };

  return (
    <div>
      <Wrapper>
        <Container>
          <div className="col2">1col</div>
          {data.map((product, idx) => (
            <div key={idx} className="col1">
              <ProductCard data={product} />
            </div>
          ))}
        </Container>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1360px;
  padding: 0 40px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: azure;

  .col1 {
    justify-content: center;
    /* width: calc(25% - 40px); */
    margin: 10px;
    cursor: pointer;
  }

  .col2 {
    background-color: lavender;
    grid-column: 1 / 3;
    margin: 10px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    .col2 {
      grid-column: 1 / 2;
    }
  }
`;

export default ProductListH;
