import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "~/theme";
import Button from "../Button";
import FlatList from "../FlatList";
import Icon from "../Icon";
import AlertModal from "../Modal";
import Typography from "../Typography";

const fileTypes = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  jpg: "image/jpeg",
  png: "image/png",
  txt: "text/plain",
};

const formatFileResult = (result) => {
  const formattedFiles = result.assets.map((file) => {
    const { mimeType, name, size, uri } = file;
    return {
      mimeType,
      name,
      size,
      uri,
      canceled: result.canceled,
    };
  });

  return formattedFiles;
};

const maxFiles = 3;

const LoadFiles = ({ logo, setLogo, uploadedFiles, setUploadedFiles }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messageOfError, setMessageOfError] = useState("");
  const [typeOfError, setTypeOfError] = useState("");
  const [titleOfError, setTitleOfError] = useState("");

  const pickLogo = async () => {
    try {
      const result = formatFileResult(
        await DocumentPicker.getDocumentAsync({
          type: [fileTypes.jpg, fileTypes.png],
        })
      );

      if (result.canceled) {
        return;
      }

      const allowedFileTypes = [fileTypes.jpg, fileTypes.png];

      const filteredFiles = filterFiles(
        result,
        allowedFileTypes,
        "Type de Logo",
        "Veuillez choisir la bonne extension pour le logo [ jpg, png ]"
      );

      setLogo(filteredFiles[0].uri);
    } catch (error) {
      showErrorModal("Erreur", "error", "Une erreur est survenue" + error);
    }
  };

  const pickOtherFiles = async () => {
    const result = formatFileResult(
      await DocumentPicker.getDocumentAsync({
        multiple: true,
        type: [fileTypes.pdf, fileTypes.doc, fileTypes.docx, fileTypes.txt],
      })
    );

    if (result.canceled) {
      return;
    }

    const allowedFileTypes = [
      fileTypes.pdf,
      fileTypes.doc,
      fileTypes.docx,
      fileTypes.txt,
    ];

    const filteredFiles = filterFiles(
      result,
      allowedFileTypes,
      "Type de fichier",
      "Veuillez choisir la bonne extension pour les fichiers [ pdf, doc, docx, txt ]"
    );

    const newFiles = filteredFiles
      .map((file, index) => ({
        ...file,
        id: uploadedFiles.length + file.name + index,
      }))
      .filter(
        (file) =>
          !uploadedFiles.find((uploadedFile) => uploadedFile.name === file.name)
      );

    if (uploadedFiles.length + newFiles.length > maxFiles) {
      showErrorModal(
        "Nombre de fichiers",
        "warning",
        "Vous ne pouvez pas charger plus de " + maxFiles + " fichiers"
      );
      return;
    }

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const filterFiles = (files, allowedTypes, title, message) => {
    const filteredFiles = files.filter((file) => {
      if (allowedTypes.includes(file.mimeType)) {
        return file;
      } else {
        showErrorModal(title, "warning", message);
      }
    });

    return filteredFiles;
  };

  const showErrorModal = (title, type, message) => {
    setModalVisible(true);
    setTitleOfError(title);
    setTypeOfError(type);
    setMessageOfError(message);
  };

  const clearLogoAndFiles = () => {
    setLogo(null);
    setUploadedFiles([]);
  };

  return (
    <View style={styles.filesLoaderContainer}>
      <AlertModal
        visible={modalVisible}
        title={titleOfError}
        message={messageOfError}
        onClose={() => setModalVisible(false)}
        type={typeOfError}
      />

      <Button
        label="Chargez"
        hideIcon
        buttonStyle={styles.loadFileButton}
        labelTypographyStyle={styles.loadFileButtonLabel}
        onPress={() => (logo ? pickOtherFiles() : pickLogo())}
        disabled={uploadedFiles.length === maxFiles}
      />
      <View style={styles.filesContainer}>
        {!logo ? (
          <View style={styles.noFilesLoadedContainer}>
            <Typography type="l_medium" typographyStyle={styles.loadLogoText}>
              Chargez le logo en premier
            </Typography>
          </View>
        ) : (
          <View style={styles.companyLogoContainer}>
            <Image source={{ uri: logo }} style={styles.companyLogo} />
            <Typography
              type="l_regular"
              typographyStyle={styles.companyLogoName}
            >
              Logo de l'établissement
            </Typography>
            <TouchableOpacity
              onPress={clearLogoAndFiles}
              style={styles.cancelLogoButton}
            >
              <Icon name="close" size={18} color={Colors.main_black} />
            </TouchableOpacity>
          </View>
        )}

        {uploadedFiles.length > 0 && (
          <FlatList
            type="files"
            items={uploadedFiles}
            onPressedItem={(item) => {
              setUploadedFiles(
                uploadedFiles.filter(
                  (uploadedFile) => uploadedFile.id !== item.id
                )
              );
            }}
            itemsStyle={styles.uploadedFiles}
          />
        )}

        {uploadedFiles.length === maxFiles && (
          <View style={styles.maxFilesContainer}>
            <Icon name="warning" size={18} color={Colors.error_color} />
            <Typography type="l_regular" typographyStyle={styles.maxFilesText}>
              Vous avez atteint le nombre maximum de fichiers
            </Typography>
          </View>
        )}
      </View>
    </View>
  );
};

export default LoadFiles;

const styles = StyleSheet.create({
  filesLoaderContainer: {
    marginTop: 20,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: Colors.main_grey,
    borderStyle: "dashed",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  loadFileButton: {
    backgroundColor: Colors.pure_white,
    borderWidth: 0,
    padding: 8,
  },
  loadFileButtonLabel: {
    color: Colors.primary_color,
  },
  filesContainer: {
    flexDirection: "column",
    width: "76%",
    marginLeft: 6,
  },
  noFilesLoadedContainer: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.input_gray,
    borderRadius: 9,
  },
  loadLogoText: {
    color: Colors.dark_grey,
  },

  cancelLogoButton: {
    marginLeft: 5,
  },

  companyLogoContainer: {
    flexDirection: "row",
    backgroundColor: Colors.input_gray,
    marginLeft: 6,
    borderRadius: 9,
    overflow: "hidden",
    alignItems: "center",
    height: 50,
    marginBottom: 10,
  },
  companyLogo: {
    width: 50,
    height: "100%",
    borderRadius: 9,
    resizeMode: "cover",
  },
  companyLogoName: {
    color: Colors.dark_grey,
    marginLeft: 6,
  },
  uploadedFiles: {
    backgroundColor: Colors.input_gray,
    justifyContent: "space-between",
    height: 50,
    borderRadius: 9,
    width: "100%",
  },
  maxFilesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    backgroundColor: Colors.pure_white,
    borderRadius: 9,
    paddingLeft: 10,
    height: 50,
    marginTop: 10,
  },
  maxFilesText: {
    color: Colors.error_color,
    width: "80%",
  },
});
