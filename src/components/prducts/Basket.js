import React from "react";
import styled from "styled-components";
const Basket = ({ elements }) => {
  console.log(elements);
  return (
    <BasketSection>
      <Header>You have item in order box</Header>
      {/* {items.length === 0 ? "0" : items.length} */}
      <Content>
        {elements.map((item) => {
          const { price, quantity, title, img, id } = item;
          return (
            <Single key={id}>
              <div>
                <Img src={img} />
                <Title>{title}</Title>
              </div>
              <BtnContainer>
                <Btn>+</Btn>
                <Btn>-</Btn>
              </BtnContainer>
              {quantity} x {price}
            </Single>
          );
        })}
      </Content>
    </BasketSection>
  );
};

export default Basket;
const BasketSection = styled.section``;
const Header = styled.div``;
const Content = styled.div``;
const Single = styled.div``;
const Img = styled.img``;
const Title = styled.div``;
const BtnContainer = styled.div``;
const Btn = styled.button``;
