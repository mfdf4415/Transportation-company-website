import Wrapper from "../../hoc/Wrapper";
import Landing from "../../components/landing/Landing";
import Hr from "../../components/ArticleHeader/ArticleHeader";
import WhyUs from "../../components/WhyUs/WhyUs";
import Zone from "../../components/Zone/Zone";
import AboutTrucks from "../../components/AboutTrucks/AboutTrucks";

const HomePage = () => {
  return (
    <>
      <Landing />
      <WhyUs />
      <AboutTrucks />
      <Zone />
    </>
  );
};

export default Wrapper(HomePage);
