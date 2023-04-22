import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Header_Tab() {
  return (
    <View
      style={{
        marginLeft: 30,
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Ionicons name="arrow-back-outline" size={24} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "800",
          color: "#FF7518",
          marginLeft: 20,
        }}
      >
        My space
      </Text>
      <Ionicons
        name="search-outline"
        size={24}
        style={{ marginLeft: 130 }}
      ></Ionicons>
      <Ionicons
        name="notifications-outline"
        size={24}
        style={{ marginLeft: 20 }}
      ></Ionicons>
    </View>
  );
}
