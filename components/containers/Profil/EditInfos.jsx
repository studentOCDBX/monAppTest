//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import Bouton from "../../Ui/Bouton/Bouton";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../../Ui/InputWithError/InputWithError";

// create a component
const EditInfos = (props) => {
  const context = useContext(UserContext);
  console.log(context);

  const [emailInput, setEmailInput] = useState(context.user.email);
  const [usernameInput, setUsernameInput] = useState(context.user.username);
  const [descriptionInput, setDescriptionInput] = useState(
    context.user.description ? context.user.description : ""
  );

  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  function handleEmail(event) {
    setEmailInput(event.target.value);
    setEmailError("");
  }

  function handleUsername(event) {
    setUsernameInput(event.target.value);
    setUsernameError("");
  }

  function handleDescription(event) {
    setDescriptionInput(event.target.value);
    setDescriptionError("");
  }

  function save() {
    if (
      emailInput.includes("@") &&
      usernameInput.length <= 12 &&
      usernameInput != "" &&
      descriptionInput.length < 100
    ) {
      context.setUser({
        ...context.user,
        email: emailInput,
        username: usernameInput,
        description: descriptionInput,
      });

      props.navigation.goBack();
    } else {
      setEmailError(emailInput.includes("@") ? "" : "Email incorrect!");

      setUsernameError(usernameInput.length <= 12 ? "" : "Username trop long!");

      setUsernameError(
        usernameInput != ""
          ? ""
          : "Username obligatoire! au moins 1 caractère minimum requis!"
      );

      setDescriptionError(
        descriptionInput.length < 100 ? "" : "MDescription trop longue!"
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modifier vos informations</Text>

      <InputWithError
        holder="Email"
        valeur={emailInput}
        action={handleEmail}
        error={emailError}
      />

      <InputWithError
        holder="Username:"
        valeur={usernameInput}
        action={handleUsername}
        error={usernameError}
      />

      <InputWithError
        style={styles.input}
        holder="Description"
        placeholderTextColor={"royalblue"}
        valeur={descriptionInput}
        action={handleDescription}
        error={descriptionError}
      />

      <Text style={{ color: "#a04141" }}></Text>
      {/*Le bouton permettant de valider le EditInfosulaire*/}
      <Bouton action={save}>
        <AntDesign name="login" size={20} color="whitesmoke" />
        <Text style={styles.button_label}>Soumettre</Text>
      </Bouton>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },

  input: {
    backgroundColor: "#DEDEDE",
    padding: 7,
    margin: 10,
  },

  button_label: {
    color: "whitesmoke",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },

  text: {
    color: "white",
  },
});

//make this component available to the app
export default EditInfos;
