import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  // height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;




export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 300px;
  padding: 24px;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 370px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 300px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 240px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
 

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 6px;
`;

export const BoxBtn = styled.div`
 
  text-align: right;
`;
export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;

  background: #5571aa;
  border-radius: 4px;
  transition: 0.5s;
  cursor:pointer;
  &:hover {
    background: #9cc9e3;
    color: black;
  }
`;


