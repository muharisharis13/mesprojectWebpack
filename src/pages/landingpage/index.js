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
import { useEffect, useState } from "react"
import { HelmetLanding } from "@utils";
import { Axios } from "../../utils"

const LandingPage = () => {
  const [data, setData] = useState({})


  const getData = async () => {
    await Axios.get("/landingpage")
      .then(res => {
        const { data: dataRes } = res.data

        setData(dataRes)

      })
  }


  useEffect(() => {
    getData()
  }, [])

  console.log({ data })

  return (
    <div>
      <HelmetLanding />
      <HeaderLanding
        data={data?.header}
      />
      <IntroLanding />
      <main id="main">
        <AboutLanding
          data={data?.about}
        />
        <ServicesLanding
          data={data?.service}
        />
        {/* <ClientLanding /> */}
        <PortofolioLanding
          data={data?.portofolio}
        />
        {/* <TestimonialsLanding /> */}
        {/* <CallToAction /> */}
        <OurTeam

          data={data?.team}
        />
        <ContactLanding
          data={data?.header}
        />
      </main>
      <FooterLanding />
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default LandingPage;
