import React from "react";
import styled from "styled-components";

import EmailIcon from "@mui/icons-material/Email";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  align-items: center;
  margin: 0 1rem;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Contact = () => {
  //hooks

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm>
          <ContactTitle>Reach out to me via LinkedIn or email 🚀</ContactTitle>
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.linkedin} target="display">
              <LinkedInIcon fontSize="large" />
            </SocialMediaIcon>
            <SocialMediaIcon
              href={Bio.email}
              target="display"
              style={{ textDecoration: "none" }}
            >
              <a
                href="mailto:abuiron80@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <EmailIcon fontSize="large" />
              </a>
            </SocialMediaIcon>
          </SocialMediaIcons>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;