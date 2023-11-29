import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, SubscriptionWalkthroughLayout } from "~/components";
import LoadFiles from "~/components/CreateCompanyLayout/loadFiles";
import { Colors } from "~/theme";

const ThirdStep = ({ navigation, route }) => {
  const [data, setData] = useState(route.params.data);
  const [image, setImage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleNavigateToLastStep = () => {
    setData({ ...data, logo: image, uploadedFiles: uploadedFiles });
    navigation.navigate("EndStep", { data: data });
  };

  return (
    <SubscriptionWalkthroughLayout step={2}>
      <View style={styles.container}>
        <LoadFiles
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          logo={image}
          setLogo={setImage}
        />
        <Button
          label="Suivant"
          onPress={handleNavigateToLastStep}
          disabled={uploadedFiles.length === 0 || !image}
          buttonStyle={styles.button}
          labelTypographyStyle={styles.buttonLabel}
          hideIcon
        />
      </View>
    </SubscriptionWalkthroughLayout>
  );
};

export default ThirdStep;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  button: {
    marginTop: 15,
  },
  buttonLabel: {
    color: Colors.main_white,
  },
});
