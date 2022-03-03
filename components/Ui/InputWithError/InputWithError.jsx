//import liraries
import React, { Component, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// create a component
const InputWithError = (props) => {
  //Variable pour afficher ou cacher les caractères de l'input
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  // Fonction qui modifie la valeur de isPasswordHidden
  function toggleIsPasswordHidden() {
    setIsPasswordHidden(!isPasswordHidden);
  }

  return (
    <View style={{ width: "100%" }}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholder={props.holder}
          placeholderTextColor={"royalblue"}
          value={props.valeur}
          onChange={props.action}
          secureTextEntry={props.isPassword && isPasswordHidden}
        />
        {props.isPassword && (
          <TouchableOpacity onPress={toggleIsPasswordHidden}>
            <FontAwesome
              name={isPasswordHidden ? "eye" : "eye-slash"}
              size={24}
              style={{ color: isPasswordHidden ? "green" : "orange" }}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.color}>{props.error}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  input_container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DEDEDE",
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },

  input: {
    backgroundColor: "#DEDEDE",
    padding: 7,
    width: "100%",
  },

  error: {
    color: "#a04141",
    fontWeight: "bold",
  },
});

//make this component available to the app
export default InputWithError;
