import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/one.jpeg")}
        />

        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/two.jpeg")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/three.jpeg")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/four.jpeg")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/five.jpeg")}
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={require("./assets/six.jpeg")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
