import React from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
const Sidebar = ({ open, toggle }) => {
  return (
    <SiderbarContent open={open}>
      <Close onClick={toggle} />
      <BtnContainer>
        <Input placeholder="Search" />

        <Btn1>Search</Btn1>
        <Btn>Journal</Btn>

        <Btn>Login</Btn>
      </BtnContainer>
      <SidebarMenu>
        <List>Men</List>
        <List>Women</List>
        <List>Objects</List>
        <List>Analog</List>
      </SidebarMenu>
    </SiderbarContent>
  );
};

export default Sidebar;
const SiderbarContent = styled.nav`
  position: fixed;
  right: ${({ open }) => (open ? "0" : "-110%")};
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 280px;
  transition: all 0.6s ease-in-out;
  z-index: 20;
`;
const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
`;
const Close = styled(FaWindowClose)`
  font-size: 2rem;
  cursor: pointer;
  margin: 10px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
  background: transparent;
  outline: none;
  border: none;
  font-size: 17px;
  line-height: 20px;
  color: #2196f3;
  background: #ccc;
  padding: 0 0.8rem;
  cursor: pointer;
  padding: 10px;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #000;
  }
`;
const Btn1 = styled.button`
  padding: 5px;
  background: #ffc333;
`;
const Input = styled.input`
  padding: 5px;
  font-size: 20px;
`;
const List = styled(LinkS)`
  margin: 1rem 0;
  padding: 8px;
  width: 100%;
  text-align: center;
  color: #2196f3;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    padding-left: 5px;
    background: #ffc222;
    color: #fff;
  }
`;
