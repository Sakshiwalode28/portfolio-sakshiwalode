import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import { Img } from "../components/Projects/ProjectsStyles";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";




const Home = () => {
  return (
    <Layout>
     
      <Hero />
      <Projects />
      <Technologies />
      <Timeline/>
      {/* <BgAnimation /> */}
      <Acomplishments />
    </Layout>
  );
};

export default Home;
