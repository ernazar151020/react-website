import React from "react";
import styled from "styled-components";
import Arrow from "../assets/img/arrow.png";
const Contact = () => {
  return (
    <ContactSection>
      <ContactContent>
        <Title>Stay in the loop</Title>
        <Text>
          Be the first to know when new products drop and <br /> get
          behind-the-scenes content straight from <br /> Ugmonk’s founder.
        </Text>
        <Form>
          <Input placeholder="Enter your email" />
          <Btn>
            <Img src={Arrow} />
          </Btn>
        </Form>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
const ContactSection = styled.div`
  padding: 80px 0 130px;
  background: #ced3ca;
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #1a1a1a;
  margin-bottom: 55px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding: 14px 18px;
  width: 310px;
  @media screen and (max-width: 460px) {
    max-width: 230px;
  } ;
`;
const Img = styled.img``;
const Btn = styled.button`
  padding: 14px 18px;
  cursor: pointer;
`;
