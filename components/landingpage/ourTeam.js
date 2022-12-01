const OurTeam = ({
  data
}) => {
  return (
    <section id="team" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Our Team</h2>
        </div>
        <div className="row justify-content-center">
          {
            data?.map((item, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="member">
                  <div className="pic">
                    <img src={item.img} alt={item.img} />
                  </div>
                  <div className="details">
                    <h4>{item.name}</h4>
                    <span>{item.jabatan}</span>
                    {/* <div className="social">
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

            ))
          }

        </div>
      </div>
    </section>
  );
};

export default OurTeam;
