import GalleryPage from "@/components/GalleryPage/GalleryPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const bgImage =
  "https://res.cloudinary.com/dwagy4zfj/image/upload/v1739023053/galleryCover_ssgtty.png";
const Gallery = () => {
  return (
    <Layout pageTitle="Gallery">
      <PageHeader pageTitle="Gallery" bgImage={bgImage} />
      <GalleryPage />
    </Layout>
  );
};

export default Gallery;
