import React from "react";
import styled from "styled-components";
import Image1 from "../assets/img/passion-1.png";
import Image2 from "../assets/img/passion-2.png";
import Image3 from "../assets/img/passion-3.png";
const Passion = () => {
  return (
    <PassionSection>
      <Container>
        <Header>
          Our mission is to create simple, beautiful objects that combine form
          and function.
        </Header>
        <PassionContent>
          <Flex>
            <SingleItem>
              <Img src={Image1} />
              <BtnLink>Shop Mens →</BtnLink>
            </SingleItem>
            <SingleItem>
              <Img src={Image2} />
              <BtnLink>Shop Mens →</BtnLink>
            </SingleItem>
          </Flex>
          <SingleItem>
            <Img src={Image3} alt="sdv s" />
            <BtnLink>Shop Mens →</BtnLink>
          </SingleItem>
        </PassionContent>
      </Container>
    </PassionSection>
  );
};

export default Passion;
const PassionSection = styled.section``;
const Container = styled.div`
  max-width: 1100px;
  padding: 120px 15px;
  margin: 0 auto;
`;
const PassionContent = styled.div``;
const SingleItem = styled.div``;
const Img = styled.img`
  width: 100%;
  max-height: 640px;
`;
const BtnLink = styled.div`
  margin: 5px 0 1rem 0;
  cursor: pointer;
`;
const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const Header = styled.div`
  font-size: clamp(1.4rem, 6vw, 2rem);
  max-width: 630px;
  margin: 0 auto;
  line-height: 36px;
  text-align: center;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 90px;
`;
