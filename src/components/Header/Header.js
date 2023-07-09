import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

// import {   } from '../Projects/ProjectsStyles';

import {
  Img,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { profile } from "../../constants/constants";

const Header = () => (
  <Container
    style={{
      position: "fixed",
      top: "0",
      left: "0px",
      right: "0px",
      zIndex: "1",
      backgroundColor: "rgb(15 22 36)",
      boxShadow: "1px 1px 5px 2px black",
    }}
  >
    <Div1>
      <Link href="/">
        <a >
          <Img src={profile[0].logo} />
        </a>
      </Link>
    </Div1>

    <Div2 style={{ paddingTop: "17.5px" }}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Sakshiwalode28">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sakshi-walode-340981208/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/SakshiWalode">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
