import Wrapper from "../../hoc/Wrapper";
import Landing from "../../components/landing/Landing";
import Hr from "../../components/ArticleHeader/ArticleHeader";
import WhyUs from "../../components/WhyUs/WhyUs"

const HomePage = () => {
  return (
    <>
      <Landing />
      <WhyUs />

    </>
  );
};

export default Wrapper(HomePage);
