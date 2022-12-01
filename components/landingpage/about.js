const AboutLanding = ({
  data
}) => {
  return (
    <section id="about" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-img">
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
          </div>

          <div className="col-lg-6 content">
            <h2>{data?.title}</h2>
            <h3>
              {data?.desc}
            </h3>

            <ul>
              {
                data?.list_about?.map((item, idx) => (
                  <li key={idx}>
                    <i className="ion-android-checkmark-circle"></i> {item}
                  </li>

                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLanding;
