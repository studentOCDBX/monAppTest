//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

// create a component
const Map = () => {
  const [userLocation, setUserLocation] = useState({
    longitude: 2,
    latitude: 48,
  });

  useEffect(() => {
    (async () => {
      const permission = await Location.requestForegroundPermissionsAsync();

      if (permission.granted) {
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setUserLocation({
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        region={{
          longitude: userLocation.longitude,
          latitude: userLocation.latitude,
          longitudeDelta: 0.0001,
          latitudeDelta: 0.0001,
        }}
        mapType="hybrid"
        style={styles.map}
        showsUserLocation={true}
      />
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
