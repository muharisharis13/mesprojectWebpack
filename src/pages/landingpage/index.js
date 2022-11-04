import {
  HeaderLanding,
  IntroLanding,
  AboutLanding,
  ServicesLanding,
  ClientLanding,
  PortofolioLanding,
  TestimonialsLanding,
  CallToAction,
  OurTeam,
  ContactLanding,
  FooterLanding,
} from "@components/landingpage";

import { HelmetLanding } from "@utils";

const LandingPage = () => {
  return (
    <div>
      <HelmetLanding />
      <HeaderLanding />
      <IntroLanding />
      <main id="main">
        <AboutLanding />
        <ServicesLanding />
        <ClientLanding />
        <PortofolioLanding />
        <TestimonialsLanding />
        <CallToAction />
        <OurTeam />
        <ContactLanding />
      </main>
      <FooterLanding />
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default LandingPage;
