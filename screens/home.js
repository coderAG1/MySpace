import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header_Tab from "../src/Header_Tab";
import Profile_Tab from "../src/Profile_Tab";
import Attendance_Tab from "../src/Attendance_Tab";
import Leaves_Tab from "../src/Leaves_Tab";
import BottomTab from "../src/BottomTab";

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#eee" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Header_Tab />
      <Profile_Tab />
      <Attendance_Tab />
      <Leaves_Tab />
      <BottomTab />
    </ScrollView>
  );
}
