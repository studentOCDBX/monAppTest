//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";

// create a component
const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a27b4e9a41af4cc49f18791a01b16ec8"
      )
      .then((response) => {
        console.log(response);
        setNewsList(response.data.articles);
        setIsLoading(false);
      })
      .catch();
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <View
          style={{
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : (
        <View style={styles.news_containerr}>
          {newsList.map((element) => {
            return (
              <View key={element.url} style={styles.new_container}>
                <Text>{element.content}</Text>
                <Text>{element.title}</Text>
                <Image
                  style={styles.news_image}
                  source={{ uri: element.urlToImage }}
                />
                <Text>{element.description}</Text>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  new_container: {
    justifyContent: "center",
  },

  news_container: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#C9C9C9",
    padding: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    maxWidth: 500,
    maxHeight: 500,
    margin: 20,
  },

  /*   news_fullName: {
    fontSize: 20,
  },*/

  news_image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});

//make this component available to the app
export default News;
