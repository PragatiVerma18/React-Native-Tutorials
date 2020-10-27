import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "toad", key: "6" },
    { name: "bower", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>

    // FlatList is built to render a large list of items. You need to pass an array of data and then render each item in the array with the renderItem callback. It is optimized to have very good performances with very large arrays because it actually only renders the items that need to be displayed at the moment.
    //ScrollView is built to render a generic content in a way that it scrolls when the content is bigger than the ScrollView itself. it does not provide the same optimization of the flat list for very long content.
    //keyextractor and numcolumn props are generally used
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
