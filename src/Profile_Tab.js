import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Profile_Tab() {
  return (
    <View
      style={{
        marginTop: 30,
        backgroundColor: "#FFF9DE",
        height: "8%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Ionicons
        name="woman-outline"
        size={50}
        style={{ margin: 30, marginLeft: 50 }}
      ></Ionicons>
      <View style={{ marginLeft: 40 }}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 23,
            fontWeight: "800",
            color: "#FF7518",
          }}
        >
          Ananya Singh
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>UX Designer</Text>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>127927</Text>
      </View>
      <Ionicons
        name="eye-outline"
        size={26}
        style={{ marginLeft: 50, color: "#FF7518" }}
      ></Ionicons>
    </View>
  );
}
