import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container ">
        <div className="testimonials-top  wow fadeInUp">
          <div className="section-title left">
            <p className="sub-title">Testimonials</p>
            <h2>Voices of Experience</h2>
          </div>
          <div className="arrows">
            <a className="arrow arrow-left active">
              <i className="fa-solid fa-chevron-left" />
            </a>
            <a className="arrow arrow-right">
              <i className="fa-solid fa-chevron-right" />
            </a>
          </div>
        </div>
        <Swiper
          {...sliderProps.testimonials}
          className="testimonial-sliders swiper wow fadeInUp aligning"
        >
          <SwiperSlide className="slider-item swiper-slide text-p">
            <div className="slider-item-content">
              <p className="text-p">
                I joined Manvian as a backend intern in full-stack development,
                eager to learn and grow. From day one, I was exposed to
                real-world challenges that pushed me beyond my comfort zone. The
                supportive environment and hands-on experience allowed me to
                sharpen my technical skills, especially in backend development,
                while understanding the bigger picture of full-stack projects.
                <br />
                Manvian taught me that growth isn’t just about coding; it’s
                about adapting, collaborating, and continuously improving. “The
                only way to do great work is to love what you do,” and my time
                here has deepened my passion for development.
                <br />I started as a learner and grew into a confident
                professional, ready to tackle complex problems and contribute
                meaningfully. I’m truly grateful for the opportunity to be part
                of such an inspiring journey!
              </p>
              <div className="author-info">
                <div className="image-container">
                  <img src="./assets/images/sarvesh.jpg" alt="image" />
                </div>
                <div className="author-info-content">
                  <h3>Beseie Cooper</h3>
                  <p className="complay-name">
                    Manvian (Backend Developer - Intern)
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item swiper-slide">
            <div className="slider-item-content">
              <p className="text-p">
                Working at Manvian as an intern has been an incredibly enriching
                experience. The supportive team and innovative work culture have
                allowed me to grow both professionally and personally.
                <br />
                I’ve had the opportunity to work on impactful projects that have
                enhanced my skills in Figma, Adobe Photoshop, Illustrator. The
                exposure to diverse projects and mentorship from experienced
                professionals has accelerated my growth as an individual and as
                a budding professional.
                <br />
                Manvian’s commitment to excellence and collaboration inspires me
                every day, and I’m grateful to be a part of this dynamic
                organization.
              </p>
              <div className="author-info">
                <div className="image-container">
                  <img src="./assets/images/vishnu.jpg" alt="image" />
                </div>
                <div className="author-info-content">
                  <h3>Vishnu priya</h3>
                  <p className="complay-name">Manvian (UI/UX Designer)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item swiper-slide">
            <div className="slider-item-content">
              <p className="text-p">
                Joining Manvian as a UX intern has been a transformative journey
                in my professional growth. In the past, I laid the foundation of
                my design skills through rigorous learning and small projects,
                which fueled my passion for creating user-centric solutions.
                <br />
                This internship has been an eye-opening experience, teaching me
                the nuances of UX design. I have honed my ability to balance
                user needs with business goals and learned to embrace feedback
                as a stepping stone to excellence. "Designing Growth, One
                Experience at a Time".
                <br />I envision myself growing further into a design
                professional who can seamlessly bridge the gap between users and
                technology. This internship has equipped me with invaluable
                lessons and a strong vision for the future, and I am grateful
                for the opportunity to be part of this great journey.
              </p>
              <div className="author-info">
                <div className="image-container">
                  <img src="./assets/images/abu.jpg" alt="image" />
                </div>
                <div className="author-info-content">
                  <h3>Abu</h3>
                  <p className="complay-name">Manvian (UX Designer)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item swiper-slide">
            <div className="slider-item-content">
              <p className="text-p">
                My journey from a curious learner to an aspiring entrepreneur
                has been fueled by a passion for creating meaningful tech
                solutions and inspiring others to dream big.
                <br />
                Manvian doesn’t just guide; it’s carving a path for growth and
                contribution to society. "The future belongs to those who
                believe in the beauty of their dreams," and with Manvian, I’m
                building mine.
              </p>
              <div className="author-info">
                <div className="image-container">
                  <img src="./assets/images/profile.jpg" alt="image" />
                </div>
                <div className="author-info-content">
                  <h3>Kesavaraman</h3>
                  <p className="complay-name">Manvian- Fullstack Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
