import AboutPage from "@/components/FreeDialysisPage/AboutPage";
import BrandOne from "@/components/BrandOne/BrandOne";
import Counters from "@/components/Counters/Counters";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import ThreeBoxes from "@/components/DialysisBoxes/ThreeBoxes";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import bgImage from "@/images/backgrounds/freeDialysisCover.png";

import React from "react";

const FreeDialysis = () => {
  return (
    <Layout pageTitle="Free Dialysis">
      <PageHeader pageTitle="Free Dialysis" bgImage={bgImage.src} />
      <AboutPage />
      <TestimonialOne className="about-page-testimonial" />
      <JoinOne className="join-one__about" />
      {/* <Counters className="about-page-counter" /> */}
      {/* <TeamOne /> */}
      <ThreeBoxes />
      {/* <BrandOne /> */}
    </Layout>
  );
};

export default FreeDialysis;
