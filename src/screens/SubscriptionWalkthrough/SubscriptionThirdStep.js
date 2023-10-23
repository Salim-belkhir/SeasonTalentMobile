import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DefaultLayout from "~/components/DefaultLayout";
import HeaderSection from "~/components/SubscriptionWalkthroughLayout/HeaderSection";
import { Typography, Button } from "~/components";
import { Colors } from "~/theme";
import * as DocumentPicker from "expo-document-picker";

function getFileIcon(extension) {
  const iconSource =
    extension.toLowerCase() === "docx" || extension.toLowerCase() === "doc"
      ? require("~/assets/icons/docx.png")
      : require("~/assets/icons/pdf.png");

  return (
    <Image
      source={iconSource}
      alt={`${extension} icon`}
      style={styles.extension_icon}
    />
  );
}

const SubscriptionThirdStep = ({ navigation }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const pickDocument = async () => {
    let document = await DocumentPicker.getDocumentAsync({});
    if (!document.cancelled) {
      const fileName = document.assets[0].name;
      const extension = fileName.split(".").pop();
      const nameWithoutExtension = fileName.replace(`.${extension}`, "");

      const newFile = {
        name: nameWithoutExtension,
        size: (document.assets[0].size / 1000).toFixed(2) + " KB",
        extension: extension,
      };

      setSelectedFiles([...selectedFiles, newFile]);
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  return (
    <DefaultLayout>
      <View style={styles.container}>
        <HeaderSection />
        <View style={styles.page}>
          <View style={styles.progression}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.actual_step} />
          </View>

          <Typography type="l_bold" typographyStyle={styles.title}>
            Téléchargez des documents
          </Typography>

          <View style={styles.div}>
            <Text style={styles.text}>
              Téléchargez les documents {"\n"} nécessaires (contrat , ... , ...)
            </Text>

            <ScrollView
              style={styles.download}
              contentContainerStyle={[
                selectedFiles.length >= 3 && { height: 200 },
              ]}
            >
              {selectedFiles.length === 0 ? (
                <View style={styles.initialText}>
                  <Text style={styles.downloadText}>
                    Téléchargez un Doc/Docx/PDF
                  </Text>
                </View>
              ) : (
                selectedFiles.map((file, index) => (
                  <View style={styles.selectedFileContainer} key={index}>
                    <View style={styles.iconContainer}>
                      {getFileIcon(file.extension)}
                    </View>
                    <View style={styles.fileInfo}>
                      <Text>{file.name}</Text>
                      <Text style={styles.fileSize}>{file.size}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.removeIconContainer}
                      onPress={() => handleRemoveFile(index)}
                    >
                      <Image
                        source={require("~/assets/icons/cross.png")}
                        style={styles.removeIcon}
                      />
                    </TouchableOpacity>
                  </View>
                ))
              )}
            </ScrollView>

            <View style={styles.button}>
              <Button
                label="Téléverser"
                onPress={pickDocument}
                labelTypographyStyle={styles.buttonLabel}
                hideIcon
              />
            </View>

            <Text></Text>
          </View>
          <Button
            label="Continuez"
            onPress={() => navigation.navigate("End")}
            disabled={selectedFiles.length === 0}
            labelTypographyStyle={styles.buttonLabel}
            hideIcon
            buttonStyle={styles.submitButton}
          />
        </View>
      </View>
    </DefaultLayout>
  );
};

export default SubscriptionThirdStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 33,
    backgroundColor: Colors.main_white,
  },
  page: {
    flex: 1,
    paddingTop: 25,
  },
  progression: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actual_step: {
    width: 30,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: Colors.greenBlue,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    backgroundColor: Colors.grey,
  },
  title: {
    fontSize: 16,
    marginTop: 25,
  },
  div: {
    width: 327,
    borderWidth: 1,
    borderColor: Colors.greenBlue,
    borderStyle: "dashed",
    borderRadius: 24,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 13,
    color: Colors.dark_grey,
    marginTop: 40,
  },
  download: {
    borderRadius: 12,
    padding: 10,
    width: 300,
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: Colors.medium_grey,
  },
  selectedFileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    marginTop: 4,
  },
  iconContainer: {
    marginRight: 16,
    marginLeft: 10,
  },
  initialText: {
    alignItems: "center",
    justifyContent: "center",
  },
  downloadText: {
    fontSize: 14,
    color: Colors.greenBlue,
  },
  fileInfo: {
    flex: 1,
    marginRight: 25,
  },
  fileSize: {
    fontSize: 12,
    color: Colors.dark_grey,
  },
  button: {
    width: 184,
    marginTop: 32,
  },
  buttonLabel: {
    color: Colors.main_white,
  },
  submitButton: {
    marginTop: 32,
  },
  extension_icon: {
    width: 33,
    height: 41,
  },
  removeIconContainer: {
    width: 20,
    height: 20,
  },
  removeIcon: {
    width: 12,
    height: 12,
  },
});
