import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Link } from "react-router-dom";

//import components
import ProductCard from "../../components/ProductCard";
import ProductCard2Col from "../../components/ProductCard2Col";

//import styles and assets
import styled from "styled-components";

const filterData = [
  "all",
  "original",
  "essential",
  "classic",
  "Dior and Rimowa",
  "Essential Sleeve",
];

const sortData = [
  { name: "Featured" },
  { name: "Low to High" },
  { name: "High to Low" },
];

const ProductListH = () => {
  const [data, setData] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState();
  const [sortBy, setSortBy] = useState("Featured");
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("/data/list.json");
    setData(data.products);
  };

  const handleFilter = (f) => {
    setSelectedFilter(f);
    setFilterOpen(false);
  };

  const filtered =
    selectedFilter && selectedFilter !== "all"
      ? data.filter((d) => d.collection === selectedFilter)
      : data;

  const sorted =
    sortBy === "Low to High"
      ? _.sortBy(filtered, (f) => parseInt(f.price))
      : sortBy === "High to Low"
      ? _.sortBy(filtered, (f) => parseInt(f.price)).reverse()
      : filtered;

  const handleSort = (s) => {
    setSortBy(s);
    setSortOpen(false);
  };

  return (
    <div>
      <Wrapper>
        <Filter>
          <FilterBy onClick={() => setFilterOpen(!filterOpen)}>
            Filter By: {selectedFilter}
          </FilterBy>
          {filterOpen && (
            <FilterDropdown>
              <ul>
                {filterData.map((f, idx) => (
                  <div key={idx} onClick={() => handleFilter(f)}>
                    {f}
                  </div>
                ))}
              </ul>
            </FilterDropdown>
          )}
          <SortBy onClick={() => setSortOpen(!sortOpen)}>
            Sort by: {sortBy}
          </SortBy>
          {sortOpen && (
            <SortDropdown>
              <ul>
                {sortData.map((sort, idx) => (
                  <li key={idx} onClick={() => handleSort(sort.name)}>
                    {sort.name}
                  </li>
                ))}
              </ul>
            </SortDropdown>
          )}

          {/* <div className="dropdown">dropdown here</div> */}
        </Filter>

        <Container>
          <div className="col2">
            <ProductCard2Col />
          </div>
          {sorted.map((product, idx) => (
            <div key={idx} className="col1">
              <Link to={`/product/${product.product_number}`}>
                <ProductCard data={product} />
              </Link>
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
  grid-auto-rows: 1fr;
  /* background-color: azure; */

  .col1 {
    justify-content: center;
    /* width: calc(25% - 40px); */
    margin: 10px;
    cursor: pointer;
  }

  .col2 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
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

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1em;

  .dropdown {
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: white;
  }
`;

const FilterBy = styled.div`
  position: relative;
`;

const FilterDropdown = styled.div`
  position: absolute;
  top: 2em;
  left: 0;
  text-align: left;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 1em;
`;

const SortBy = styled.div`
  position: relative;
`;

const SortDropdown = styled.div`
  position: absolute;
  top: 2em;
  right: 0;
  text-align: right;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 1em;
`;

export default ProductListH;
