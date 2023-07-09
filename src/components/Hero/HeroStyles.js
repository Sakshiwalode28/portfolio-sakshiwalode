import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  margin-top: 100px;
  
  
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 75px;
    padding: 2rem;
   
    
   
  }

 
  @media ${(props) => props.theme.breakpoints.sm} {
   
    margin: -27px 0;
       width: 100%;
       display: flex;
       flex-direction: column;
       
     }
  
 
  
`;
export const Img = styled.img`
  width: 50rem;
  height: 45rem;
  padding: 1rem;
  margin-left: 4rem;
  margin-top: 100px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
  order: 2;
  box-shadow: 3px 3px 8px 3px hsl(191.86deg 74.78% 45.1%) inset;
  // box-shadow: 3px 3px  hsl(191.86deg 74.78% 45.1%) ;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40rem;
    height: 45rem;
    margin-right: 2rem;
    margin-left: 0;
    
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display:none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  
    display:none;
`;

