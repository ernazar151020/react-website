import React, { useState } from "react";
import { products } from "../../data/data";
import Items from "./Items";
import Categories from "./Categories";
import styled from "styled-components";
import Basket from "./Basket";

const allCategories = [
  "all",
  ...new Set(products.map((item) => item.categories)),
];
console.log(allCategories);
const Products = () => {
  const [menuItems, setMenuItems] = useState(products);
  const [items, setItems] = useState([]);

  // filtering buttons

  const filterBtn = (category) => {
    if (category === "all") {
      setMenuItems(products);
      return;
    }
    const newItems = products.filter((item) => item.categories === category);
    setMenuItems(newItems);
  };

  const onAdd = (product) => {
    console.log(product);
    // const checkExist = items.find((item) => item.id === product.id);
    // if (checkExist) {
    //   alert("Item already added");
    // } else {
    //   setItems([...items, { ...product, quantity: 1 }]);
    // }
  };

  return (
    <ProductsSection>
      <div style={{ visibility: "hidden" }}>
        <Basket elements={items} />
      </div>
      <Container>
        <Categories allCategories={allCategories} filterBtn={filterBtn} />
        <Items menuItems={menuItems} onAdd={onAdd} />
      </Container>
      <Button>Shop New Arrivals →</Button>
    </ProductsSection>
  );
};

export default Products;
const ProductsSection = styled.section`
  padding: 40px 0 130px;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Button = styled.button`
  background: #000;
  border: none;
  outline: none;
  font-size: 20px;
  line-height: 56px;
  text-align: center;
  display: block;
  margin: 0 auto;
  color: #f7f7f7;
  padding: 0px 60px;
  background: #000;
  cursor: pointer;
  white-space: nowrap;
`;
