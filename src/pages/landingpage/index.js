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

const LandingPage = () => {
  return (
    <div>
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
      <a href="#" class="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default LandingPage;
