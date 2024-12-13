const Opptiverse = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 wow fadeInRight">
            <div className="section-title left">
              <p className="sub-title  about-sub-title"></p>
              <h2 className="about-heading text-primary">Opptiverse</h2>
            </div>

            <div className="content-size">
              <p className="content">
                Opptiverse: A groundbreaking initiative by Manvian, dedicated to
                creating a universe of endless opportunities. At Opptiverse, we
                believe every idea deserves the chance to flourish, and every
                talent deserves a stage to shine.
              </p>
              <p>
                Join us on a journey to explore, innovate, and carve your own
                path to success.
              </p>
              <p>
                <i>
                  {" "}
                  “Opptiverse is more than just a platform—it’s the beginning of
                  a revolution where dreams transform into reality.”
                </i>
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="author-image-container wow fadeInLeft">
              <div className="image-bg moving-effect" />
              <div className="image-area position">
                <img src="./assets/images/Aboutsection.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Opptiverse;
