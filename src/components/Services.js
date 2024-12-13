import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".service-card"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <p className="sub-title wow fadeInDown">Opportunities</p>
          <h2 className="wow fadeInDown">What You Achieve</h2>
        </div>
        <div className="card-container">
          <div className="row rowplus">
            <div className="col-md-6 col-xl-4 ">
              <div
                className="service-card wow fadeInDown align"
                data-wow-delay=".2s"
              >
                <div className="icon-container">
                  <img
                    src="./assets/icons/uiux.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Backend Developer</h3>
                <p>
                  Our backend developers focus on building robust, scalable
                  server-side applications. We ensure that the foundation of
                  your digital product runs smoothly, securely, and efficiently,
                  handling everything from databases to APIs.
                </p>
                <a
                  href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
                  target="_blank"
                  className="link"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div
                className="service-card wow fadeInDown align"
                data-wow-delay=".3s"
              >
                <div className="icon-container">
                  <img
                    src="./assets/icons/web_dev.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Frontend Developer</h3>
                <p>
                  As frontend developers, we craft user-facing features with
                  attention to detail. We ensure a seamless and interactive
                  experience, turning designs into fully responsive, functional
                  websites and applications that engage users.
                </p>
                <a
                  href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
                  target="_blank"
                  className="link"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-4 ">
              <div
                className="service-card wow fadeInDown align"
                data-wow-delay=".3s"
              >
                <div className="icon-container">
                  <img
                    src="./assets/icons/web_dev.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Fullstack Developer</h3>
                <p>
                  As Fullstack Developers, we handle both frontend and backend
                  development, ensuring seamless integration. Our focus is on
                  creating high-quality, scalable, and secure applications that
                  deliver excellent user experiences and meet business needs.
                </p>
                <a
                  href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
                  target="_blank"
                  className="link"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-4 ">
              <div
                className="service-card wow fadeInDown align"
                data-wow-delay=".4s"
              >
                <div className="icon-container">
                  <img
                    src="./assets/icons/product_desginer.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>UI/UX Designer</h3>
                <p>
                  Our UI/UX designers create visually appealing, functional
                  interfaces that provide seamless user experiences. Through
                  research and testing, we ensure designs are intuitive,
                  user-centered, and meet audience needs.
                </p>
                <a
                  href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
                  target="_blank"
                  className="link"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-4 ">
              <div
                className="service-card wow fadeInDown align"
                data-wow-delay=".4s"
              >
                <div className="icon-container">
                  <img
                    src="./assets/icons/product_desginer.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Graphic Designer</h3>
                <p>
                  Our graphic designers bring your brand and vision to life with
                  creative, eye-catching designs. Whether it’s logos, marketing
                  materials, or digital content, we create visual assets that
                  effectively communicate your message and stand out.
                </p>
                <a
                  href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
                  target="_blank"
                  className="link"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-4 ">
              <div
                className="service-card wow fadeInDown align"
                data-wow-delay=".4s"
              >
                <div className="icon-container">
                  <img
                    src="./assets/icons/product_desginer.svg"
                    className="svg"
                    alt="image"
                  />
                </div>
                <h3>Video Editor</h3>
                <p>
                  Our video editors craft compelling visual stories. We
                  specialize in editing high-quality video content that
                  resonates with your audience, from promotional videos to
                  social media content, ensuring each frame delivers impact and
                  clarity.
                </p>
                <a
                  href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
                  target="_blank"
                  className="link"
                />
              </div>
            </div>
            <a
              href="https://wa.me/9344927627?text=Hi%20Opptiverse!%20👋%20I’m%20interested%20in%20learning%20more%20about%20your%20platform%20and%20opportunities.%20Could%20you%20guide%20me%20on%20how%20to%20get%20started?%20🚀
"
              target="_blank"
              className="cf-btn read-more"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
