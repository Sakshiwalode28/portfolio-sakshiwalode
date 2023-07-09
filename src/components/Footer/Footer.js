import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { profile } from "../../constants/constants";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Img
} from "./FooterStyles";
;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
          {/* <LinkItem href="tel:111-111-111">111-111-111</LinkItem>  */}
        <LinkColumn>
          <LinkTitle></LinkTitle>
          <Img
            src={profile[0].logo}
          />
        </LinkColumn>

        <LinkColumn >
          <LinkTitle>Address</LinkTitle>
          <LinkItem >
            Bangalore, India📍
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sakshiwalode28@gmail.com">
            sakshiwalode28@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's connect and work together...</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Sakshiwalode28">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/sakshi-walode-340981208/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://twitter.com/SakshiWalode">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
