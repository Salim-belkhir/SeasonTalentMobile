import { DefaultLayout, DetailsLayout } from "~/components";

const DetailsCandidate = ({ route }) => {
  
  return (
    <DefaultLayout>
      <DetailsLayout
        data={route.params.item}
        type="candidate"
        recommend={route.params.recommend}
      />
    </DefaultLayout>
  );
};

export default DetailsCandidate;
