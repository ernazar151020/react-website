import React from "react";
import styled from "styled-components";
const Items = ({ menuItems, onAdd }) => {
  return (
    <ItemContent>
      {menuItems.map((item) => {
        const { price, id, title, img } = item;
        return (
          <SingleItem key={id}>
            <Img src={img} />
            <Title>{title}</Title>
            <Price>$ {price.toFixed(2)}</Price>
            {/* <Button onClick={() => onAdd(item)}>Add to Shopping List</Button> */}
          </SingleItem>
        );
      })}
    </ItemContent>
  );
};

export default Items;
const ItemContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-bottom: 66px;
`;
const SingleItem = styled.div``;
const Img = styled.img`
  width: 100%;
`;
const Title = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #1a1a1a;
  margin-top: 11px;
`;
const Price = styled.div`
  font-size: 13px;
  line-height: 13px;
  color: #1a1a1a;
`;
const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  background: #ffc222;
  text-align: center;
  padding: 8px 20px;
  display: block;
  margin: 10px auto;
`;
