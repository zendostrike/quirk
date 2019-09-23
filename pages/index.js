import PropTypes from "prop-types";

import MainLayout from "../src/layouts/main";
import { Hero, Advantages, Pricing } from "@components";
import { withTranslation } from "../i18n";

const Home = ({ t }) => (
  <MainLayout>
    <Hero />
    <Advantages />
    <Pricing />
    <div>{t("test-your-ideas")}</div>
  </MainLayout>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Home);
