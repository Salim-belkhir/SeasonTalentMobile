import { Image, StyleSheet, View } from "react-native";
import { returnFileImage } from "~/constants";
import { Colors } from "~/theme";
import { renderItems } from "~/utils";
import Icon from "../Icon";
import Typography from "../Typography";

const renderField = (iconName, text) => {
  return (
    <View style={styles.fieldContainer}>
      <Icon
        name={iconName}
        size={18}
        color={Colors.main_black}
        style={styles.icon}
      />
      <Typography type="l_regular" typographyStyle={styles.field}>
        {text}
      </Typography>
    </View>
  );
};

const renderFile = (item) => {
  return (
    <View style={styles.fileContainer} key={item.id}>
      <Image source={item.logo} alt="Company logo" style={styles.fileLogo} />
      <Typography type="l_regular" typographyStyle={styles.file}>
        {item.name}
      </Typography>
    </View>
  );
};

const Informations = ({ address, contact, uploadedFiles, isPrincipal }) => {
  const filesWithImage = uploadedFiles.map((file) => ({
    ...file,
    logo: returnFileImage(file.mimeType),
  }));

  return (
    <View style={styles.InformationsContainer}>
      <View style={styles.principalLabel}>
        {isPrincipal && (
          <Typography type="l_bold" typographyStyle={styles.principalText}>
            Cet établissement est principale .
          </Typography>
        )}
      </View>
      <View style={styles.fieldsContainer}>
        {renderField("enviroment", address)}
        {renderField("mail", contact)}
      </View>

      <View style={styles.filesContainer}>
        {renderItems(filesWithImage, renderFile)}
      </View>
    </View>
  );
};

export default Informations;

const styles = StyleSheet.create({
  InformationsContainer: {
    marginTop: 20,
  },
  fieldsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  fieldContainer: {
    backgroundColor: Colors.pure_white,
    height: 50,
    padding: 10,
    borderRadius: 9,
    borderWidth: 0.3,
    borderColor: Colors.primary_color,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
    overflow: "hidden",
  },
  icon: {
    marginRight: 10,
    marginLeft: 6,
    color: Colors.primary_color,
  },
  field: {
    color: Colors.main_black,
    overflow: "hidden",
    width: "90%",
  },
  filesContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Colors.primary_color,
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  fileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: Colors.input_gray,
    borderRadius: 9,
  },
  fileLogo: {
    width: 30,
    height: 40,
    borderRadius: 9,
    resizeMode: "cover",
    marginRight: 5,
  },
  file: {
    color: Colors.dark_grey,
    overflow: "hidden",
    marginLeft: 15,
    width: "80%",
  },
  principalLabel: {
    marginHorizontal: 20,
  },
  principalText: {
    color: Colors.primary_color,
  },
});
