import { StyleSheet, View } from "react-native";
import TextInput from "../TextInput";
import { Colors } from "~/theme";
import Button from "../Button";

const LogInputSection = ({ navigation, logIn = true }) => {
  return (
    <View style={styles.inputFieldsContainer}>
      {/* The input fields to log in or sign up */}
      {logIn ? (
        <View>
          <TextInput placeholder="Email" leftIcon="mail" />
          <TextInput
            placeholder="Mot de passe"
            leftIcon="lock"
            rightIcon={"eye"}
            secureTextEntry={true}
            InputStyle={styles.input}
          />

          {/* Let's add a button  */}
          <Button
            label="Se connecter"
            type="primary"
            onPress={() => navigation.navigate("Details")}
            buttonStyle={styles.button}
            hideIcon
            labelTypographyStyle={styles.buttonLabel}
          />
        </View>
      ) : (
        <View>
          <TextInput placeholder="Nom Prenom" leftIcon="user" hideIcon />
          <TextInput placeholder="Email" leftIcon="mail" />
          <TextInput
            placeholder="Mot de passe"
            leftIcon="lock"
            rightIcon={"eye"}
            secureTextEntry={true}
            InputStyle={styles.input}
          />

          {/* Let's add a button  */}
          <Button
            label="S'inscrire"
            type="primary"
            onPress={() => navigation.navigate("Details")}
            buttonStyle={styles.button}
            hideIcon
            labelTypographyStyle={styles.buttonLabel}
          />
        </View>
      )}
    </View>
  );
};

export default LogInputSection;

const styles = StyleSheet.create({
  inputFieldsContainer: {
    width: "100%",
    backgroundColor: Colors.main_white,
    marginTop: 70,
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
