import React from 'react';
// import '../../../public/images/1'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { ExternalLinks, Img , BoxBtn} from './AcomplishmentsStyles';

const data = [
  { number: 20,
    name: 'Complete ReactJS developer Bootcamp',
    by:'Learn Code Online', 
    certi_img:'images/lco.png',
    image_link :"https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/53635/2972046_53635.pdf?1662885995"},
  { number: 20,
    name: 'Getting Started with Python',
    by:'Coursera',   
    certi_img:'images/coursera.png',
    image_link:"https://www.coursera.org/account/accomplishments/verify/Z9FSUUFEE92L"},
  
    { number: 20,
    name: 'Web Development Bootcamp',
    by:'Codekaro',
    certi_img:'images/codekaro.png',
    image_link:"https://codekaro.in/workshop-certificate/aaa81d349a4dfcd5"},
 
    // { number: 20,
    // name: 'Python Programming',
    // by:'Sanfoundry',
    // image:"https://www.coursera.org/account/accomplishments/verify/Z9FSUUFEE92L"},
  

  // { number: 1000, text: 'Students', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
 <Section >
   <SectionDivider/>
  <SectionTitle main>
    Certificates
  </SectionTitle>
  <Boxes>
    {data.map((card, i)=>(
      <Box key={i}>
        <Img src={card.certi_img} />
        {/* <BoxNum>{card.number}</BoxNum> */}
        <BoxText>{card.name}</BoxText>
        <BoxText>- {card.by}</BoxText>
        
       
       
        <BoxBtn>

        <ExternalLinks href={card.image_link} >View</ExternalLinks>
        </BoxBtn>
      </Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
