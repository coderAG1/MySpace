import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTab() {
  const screenHeight = Dimensions.get("screen").height;
  return (
    <View
      style={{
        height: screenHeight,
        flexDirection: "row",
        marginHorizontal: 30,
        margin: 10,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="receipt" text="Order" />
      <Icon icon="users" text="My space" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
