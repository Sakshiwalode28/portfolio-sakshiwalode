import React from 'react';
// import {FaEye} from "react-icons/fa6";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section  id="projects" >
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
        <BlogCard key= {project.id}>
          <Img src={project.image}/>
          <TitleContent style={{marginTop:'0.2em'}}>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr/>

          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
        <div>
           
          <TitleContent style={{marginTop:'0.5em'}}>Tech Stack</TitleContent>
          <TagList >
            {project.tags.map((tag, i) => (
              <Tag key={i}>
                {tag}
              </Tag>
            ))}
          </TagList>
        </div>

        <UtilityList >
          <ExternalLinks href={project.source}>
            <img width="50rem" height='50rem' src="https://img.icons8.com/?size=512&id=u9R54eMKS8fw&format=png" href={project.source} /></ExternalLinks>

          <ExternalLinks href={project.visit}> <img width="50rem" height='50rem' src="https://img.icons8.com/?size=1x&id=111134&format=png" href={project.visit} /></ExternalLinks>
   
        </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;