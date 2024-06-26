import React from "react";
import { DefaultLayout, DetailsLayout } from "~/components";

const DetailsJobOffer = ({ route }) => {
  return (
    <DefaultLayout>
      <DetailsLayout data={route.params.item} type="jobOffer" />
    </DefaultLayout>
  );
};

export default DetailsJobOffer;
