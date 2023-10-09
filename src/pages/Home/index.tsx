import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="landing.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent[0].title}
        content={MissionContent[0].text}
        icon="repairs.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={MissionContent[1].title}
        content={MissionContent[1].text}
        icon="inspection.svg"
        id="mission"
      />
      
      <ContentBlock
        type="right"
        title={MissionContent[2].title}
        content={MissionContent[2].text}
        icon="rent.svg"
        id="mission"
      />
      
      <ContentBlock
        type="left"
        title={MissionContent[3].title}
        content={MissionContent[3].text}
        icon="knowledge.svg"
        id="mission"
      />
      
      <ContentBlock
        type="right"
        title={MissionContent[4].title}
        content={MissionContent[4].text}
        icon="sale.svg"
        id="mission"
      />
      
      <ContentBlock
        type="left"
        title={MissionContent[5].title}
        content={MissionContent[5].text}
        icon="judge.svg"
        id="mission"
      />
      
      <ContentBlock
        type="right"
        title={MissionContent[6].title}
        content={MissionContent[6].text}
        icon="test.svg"
        id="mission"
      />
      
      <ContentBlock
        type="left"
        title={MissionContent[7].title}
        content={MissionContent[7].text}
        icon="finance.svg"
        id="mission"
      />
      
      <ContentBlock
        type="right"
        title={MissionContent[8].title}
        content={MissionContent[8].text}
        icon="family.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="smarth.jpg"
        id="product"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
