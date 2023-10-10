import { StyleSheet, View } from "react-native";
import TextInput from "../TextInput";
import { Colors } from "~/theme";
import Button from "../Button";
import AlertModal from "../Modal";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";

const mapStateToProps = (state) => ({
  logState: state.logSignIn.logState,
});

const LogInputSection = ({ navigation, logState }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertModalVisible, setAlertModalVisible] = useState(false);
  const [alertModalTitle, setAlertModalTitle] = useState("");
  const [alertModalMessage, setAlertModalMessage] = useState("");

  useEffect(() => {
    // empty the input fields when the user switches between log in and sign up
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [logState]);

  const handleAlertModalClose = () => {
    setAlertModalVisible(false);
  };

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      setAlertModalTitle("All fields are mandatory");
      setAlertModalMessage("Please, complete the empty fields !");
      setAlertModalVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertModalTitle("Passwords do not match");
      setAlertModalMessage("Please, check all the letters !");
      setAlertModalVisible(true);
      return;
    }

    // Handle sign up logic here
    navigation.navigate("Details");
  };

  const handleLogIn = () => {
    if (!email || !password) {
      setAlertModalTitle("All fields are mandatory");
      setAlertModalMessage("Please, complete the empty fields !");
      setAlertModalVisible(true);
      return;
    }


    // Handle log in logic here
    navigation.navigate("Details");
  };

  return (
    <View style={styles.inputFieldsContainer}>
      {/* The input fields to log in or sign up */}
      {logState ? (
        <View>
          <TextInput
            placeholder="Email"
            leftIcon="mail"
            InputStyle={styles.input}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Mot de passe"
            leftIcon="lock"
            rightIcon={"eye"}
            secureTextEntry
            InputStyle={styles.input}
            onChangeText={setPassword}
            // error="Mot de passe incorrect !"
          />

          {/* Let's add a button  */}
          <Button
            label="Se connecter"
            type="primary"
            onPress={handleLogIn}
            buttonStyle={styles.button}
            hideIcon
            labelTypographyStyle={styles.buttonLabel}
          />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Nom Prenom"
            leftIcon="user"
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email"
            leftIcon="mail"
            InputStyle={styles.input}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Mot de passe"
            leftIcon="lock"
            rightIcon={"eye"}
            secureTextEntry={true}
            InputStyle={styles.input}
            onChangeText={setPassword}
          />
          <TextInput
            placeholder="Confirmer le mot de passe"
            leftIcon="lock"
            rightIcon={"eye"}
            secureTextEntry={true}
            InputStyle={styles.input}
            onChangeText={setConfirmPassword}
          />
          {/* Let's add a button  */}
          <Button
            label="S'inscrire"
            type="primary"
            onPress={handleSignUp}
            buttonStyle={styles.button}
            hideIcon
            labelTypographyStyle={styles.buttonLabel}
          />
        </View>
      )}
      <AlertModal
        visible={alertModalVisible}
        title={alertModalTitle}
        message={alertModalMessage}
        onClose={handleAlertModalClose}
        type="warning"
      />
    </View>
  );
};

export default connect(mapStateToProps)(LogInputSection);

const styles = StyleSheet.create({
  inputFieldsContainer: {
    width: "100%",
    backgroundColor: Colors.main_white,
    marginTop: 31,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 32,
    height: 52,
  },
  buttonLabel: {
    color: Colors.main_white,
    fontSize: 16,
  },
});
