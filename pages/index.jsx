import About from "@/src/components/About";
import Opptiverse from "@/src/components/Opptiverse";
import TypingEffect from "@/src/components/TypingComponent";

import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";

import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";

import Cursor from "@/src/layouts/Cursor";
import Footer from "@/src/layouts/Footer";
import Header from "@/src/layouts/Header";

import ScrollTop from "@/src/layouts/ScrollTop";
import { axo } from "@/src/utils";

import { Fragment, useEffect } from "react";
import Colloborators from "@/src/components/Colloborators";

const Index = () => {
  useEffect(() => {
    axo.imgToSvg();
    axo.smoothScrolling();
    axo.stickyNav();
    axo.customMouse();
    axo.movingAnimation();
    axo.animation();
  }, []);

  return (
    <Fragment>
      <Header />
      <Home children={<TypingEffect />} />

      <Services />
      <About />
      <Opptiverse />

      <Testimonials />
      <Colloborators />

      <Contact />
      <Footer />
      <ScrollTop />
      <Cursor />
    </Fragment>
  );
};
export default Index;
