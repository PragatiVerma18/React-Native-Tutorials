import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("pragati");
  const [age, setAge] = useState("30");

  const clickHandler = () => {
    setName("Elo");
    setAge("25");
  };
  return (
    <View style={styles.container}>
      <Text>
        name: {name}, age: {age}
      </Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});
