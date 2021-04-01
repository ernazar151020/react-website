import React from "react";
import styled from "styled-components";
const Categories = ({ allCategories, filterBtn }) => {
  return (
    <BtnContainer>
      {allCategories.map((item, index) => {
        return (
          <Button
            active={false}
            type="button"
            key={index}
            onClick={() => filterBtn(item)}
          >
            {item}
          </Button>
        );
      })}
    </BtnContainer>
  );
};

export default Categories;
const BtnContainer = styled.div`
  text-align: center;
`;
const Button = styled.button`
  margin: 0 1.5rem;
  margin-bottom: 55px;
  color: ${({ active }) => (active ? "#ffc222" : "#000")};
  font-size: 17px;
  line-height: 27px;
  background: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease-in-out;
  :before {
    position: absolute;
    content: "";
    bottom: -3px;
    width: 0;
    height: 2px;
    transition: all 0.5s ease-in-out;
    background: #000;
  }
  &:hover::before {
    width: 100%;
  }
`;
