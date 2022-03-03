//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

// create a component
const Map = () => {
  return (
    <View style={styles.container}>
      <MapView mapType="hybrid" style={styles.map}></MapView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
});

//make this component available to the app
export default Map;
