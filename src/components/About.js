const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="author-image-container wow fadeInLeft area-img">
              <div className="image-bg moving-effect position" />
              <div className="image-area ">
                <img
                  src="./assets/images/Aboutsection.jpg"
                  className="full-container-image"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 wow fadeInRight">
            <div className="section-title left">
              <p className="sub-title  about-sub-title">WE MANVIAN</p>
              <h2 className="about-heading">
                Empowering Entrepreneurs & Businesses
              </h2>
            </div>
            <p className="content">
              At Manvian, we believe success requires more than ideas—it needs
              commitment, risk-taking, and the right guidance. We offer a
              thriving ecosystem with resources, education, and empowerment for
              entrepreneurs at every stage.
              <br />
              <br />
              Whether you're a startup or an established business, we provide
              tailored services—from foundational advice to advanced
              strategies—helping you turn challenges into opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
