import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Img } from "./HeroStyles";

import { profile } from "../../constants/constants";


const Hero = () => (
  <Section row nopadding style={{marginTop:'50px'}} >
    <LeftSection >
      <SectionTitle  >
        Hello, I'am <br /> Sakshi Deepak Walode,
      </SectionTitle>
      <SectionText>
      Full-stack Web Developer enthusiast based in Bangalore, Karnataka, India 📍
      < br />
      I'm skilled in translating design concepts into functional code, with a focus on seamless interactions and optimized performance across browsers and devices.
        
        
      </SectionText>
   
      <Button onClick={() =>(window.location = "mailto:sakshiwalode28@gmail.com")}>Say Hii!</Button>
    </LeftSection>

    <Img src={profile[0].image} alt="Profile Picture" />
  </Section>
);

export default Hero;
