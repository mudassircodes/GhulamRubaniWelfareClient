import CausesDetailsPage from "@/components/CausesDetails/CausesDetails";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React, { useState, useEffect } from "react";
import bg from "@/images/backgrounds/bg-3.png"; // Import default background image

const CausesDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [cause, setCause] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Call the Express API to fetch the cause details using fetch
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/donation-blog/single/${id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCause(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching cause details:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching cause details. Please try again later.</div>;
  }

  if (!cause) {
    return <div>No cause found.</div>;
  }

  return (
    <Layout pageTitle="Causes Details">
      <PageHeader
        bgImage={cause.images.coverBanner.url || bg} // Use default bg if no coverBanner
        pageTitle="Causes Details"
      />
      <CausesDetailsPage id={id} />
    </Layout>
  );
};

export default CausesDetails;
