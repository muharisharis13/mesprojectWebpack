const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="intro-content">
          <h2>
            Making <span>your ideas</span>
            <br />
            happen!
          </h2>
          <div>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
            <a href="#portfolio" className="btn-projects scrollto">
              Our Projects
            </a>
          </div>
        </div>

        <div id="intro-carousel" className="owl-carousel">
          <div
            className="item"
            style={{ backgroundImage: "url(assets/img/intro-carousel/1.jpg)" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url(assets/img/intro-carousel/2.jpg)" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url(assets/img/intro-carousel/3.jpg)" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url(assets/img/intro-carousel/4.jpg)" }}
          ></div>
          <div
            className="item"
            style={{ backgroundImage: "url(assets/img/intro-carousel/5.jpg)" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
