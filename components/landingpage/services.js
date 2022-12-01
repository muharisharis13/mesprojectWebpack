const ServicesLanding = ({
  data
}) => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>Services</h2>
          <p>
            Kami menyediakan beberapa layanan Digital dalam menangani kebutuhan anda
          </p>
        </div>

        <div className="row">
          {
            data?.list_services?.map((item, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="box wow fadeInLeft">
                  <div className="icon">
                    {
                      item.title === "Website" ?
                        <i className="fa fa-safari"></i>
                        : item.title === "Graphic Design" ?
                          <i className="fa fa-picture-o"></i>

                          : item.title === "VideoGraphic" ?
                            <i className="fa fa-film"></i>
                            :
                            <i className="fa fa-server"></i>
                    }
                  </div>
                  <h4 className="title">
                    <a href="">{item.title}</a>
                  </h4>
                  <p className="description">
                    {item.desc}
                  </p>
                </div>
              </div>

            ))
          }

        </div>
      </div>
    </section>
  );
};

export default ServicesLanding;
