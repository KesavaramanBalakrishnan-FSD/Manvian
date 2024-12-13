import Counter from "./Counter";

const Home = ({ children }) => {
  return (
    <section id="home" className="text-white bg-hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 div-size">
            <div className="type-position">{children}</div>

            <div className="position-fixed">
              <button>
                <a
                  href="#contact"
                  className="cf-btn wow fadeInDown  "
                  data-wow-delay=".7s"
                >
                  Conect with me
                </a>
              </button>
              <div
                className="counter d-flex align-center content-space-between wow fadeInDown"
                data-wow-delay="1.7s"
              >
                <div className="experence">
                  <h2>
                    <Counter end={1000} />+
                  </h2>
                  <p className="font-20px">
                    Students got opportunity more than
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-right">
              <div className="hero-right-bg " />
            </div>
          </div>
        </div>
      </div>
      <div className="bg" />
    </section>
  );
};
export default Home;
