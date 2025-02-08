import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import bgImage from "@/images/backgrounds/donationCover.png";

import React from "react";

const Donation = () => {
  return (
    <Layout pageTitle="Donation">
      <PageHeader pageTitle="Donation" bgImage={bgImage.src} />
      <HelpingOne />
    </Layout>
  );
};

export default Donation;
