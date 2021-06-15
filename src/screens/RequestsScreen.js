import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Header,
  Button
} from "react-native";
import Screen from "../components/Screen";

export default function RequestsScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Add" />,
    });
  });

  const requests = [
    { title: "Request1", id: "0" },
    { title: "Request2", id: "1" },
    { title: "Request3", id: "2" },
  ];

  function renderItem({ item }) {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderBottomColor: "blue",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, width: "80%" }}>{item.title}</Text>
      </View>
    );
  }

  return (
    <Screen styles={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text> Back to Login</Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: "#c3bef0" }}>
        <Text style={styles.header}>Requests</Text>
      </View>
      <Text>
        <FlatList
          data={requests}
          renderItem={renderItem}
          style={{ width: "100%" }}
          keyExtractor={(item) => item.id.toString()}
        />
      </Text>
      <Text>hello</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffdf1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#defcf9",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  },
  button: {
    color: "#defcf9",
    fontWeight: "bold",
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "Avenir",
    padding: 10,
  }
});
