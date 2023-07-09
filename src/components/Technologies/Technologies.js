import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, MainImage } from './TechnologiesStyles';
import {Technologies_known} from '../../constants/constants'
const Technologies = () =>  (

 <Section id="tech">
  <SectionDivider/>
 <SectionTitle main>Technologies</SectionTitle>
  <SectionText>I have developed a robust skill set encompassing a wide array of software technologies. Moreover, I have gained valuable hands-on experience by actively working on these technologies, further enhancing my expertise in the field.</SectionText>
<List>

{
  
  Technologies_known.map((tech) => (
    <ListItem>
    <ListContainer>
    <MainImage src={tech.logo} />
      <ListParagraph>{tech.name}</ListParagraph>
    </ListContainer>
  </ListItem>
  

  ))
}
 
  {/* <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>Experience with <br/> Node and Databases</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>Experience with <br/> React.js</ListParagraph>
    </ListContainer>
  </ListItem> */}
</List>
 </Section>
);

export default Technologies;
