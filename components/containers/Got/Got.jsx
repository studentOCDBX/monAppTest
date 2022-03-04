//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

// create a component
const Got = () => {
  const [listPerso, setListPerso] = useState([]);

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        console.log(response);
        setListPerso(response.data);
      })
      .catch();
  }, []);

  return (
    <ScrollView>
      {listPerso.map((element) => {
        return (
          <View key={element.id} style={styles.perso_container}>
            <Text style={styles.perso_fullName}>{element.fullName}</Text>
            <Image
              style={styles.perso_image}
              source={{ uri: element.imageUrl }}
            />
            <Text style={styles.perso_title}>{element.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  perso_container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C9C9C9",
    padding: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    maxWidth: 500,
    maxHeight: 500,
    margin: 20,
  },

  perso_fullName: {
    fontSize: 20,
  },

  perso_image: {
    width: "100%",
    height: "100%",
  },
});

//make this component available to the app
export default Got;
