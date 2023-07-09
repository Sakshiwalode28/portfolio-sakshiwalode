import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  // height:100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem 0;
  place-items: center;
  column-gap: 6rem;
  row-gap: 6rem;
  @media ${(props) => props.theme.breakpoints.md} {
    // padding: 0 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    // padding: 0 5rem;
    padding-bottom: 5rem;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 1);
  text-align: center;
  width: 100%;
  height: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;

    margin-bottom: -2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: auto;
    margin-bottom: -2rem;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: auto 0.1rem;
    padding: 0 0.6rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 0.5rem;
  background: #5571aa;
  border-radius: 50px;
  transition: 0.5s;
  &:hover {
    background: #9cc9e3;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 0.3rem;

    border-radius: 50px;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
