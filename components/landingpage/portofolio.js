const PortofolioLanding = ({
  data
}) => {
  return (
    <section id="portfolio" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>
            Beberapa Portofolio yang sudah berhasil kami kerjakan.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row no-gutters justify-content-center">
          {
            data?.map((item, idx) => (
              <div className="col-lg-3 col-md-4" key={idx}>
                <div className="portfolio-item wow fadeInUp">
                  <a href={item.href} target="__blank">
                    <img src={item.img} alt="" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <h2 className="wow fadeInUp">{item.title}</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </section>
  );
};

export default PortofolioLanding;
