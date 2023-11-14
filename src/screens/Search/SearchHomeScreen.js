import React from "react";
import { SearchLayout } from "~/components";

const SearchHome = ({ route }) => {
  // get the initial param
  const { type } = route.params;

  return <SearchLayout searchType={type} />;
};

export default SearchHome;
