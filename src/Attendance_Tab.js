import { View, Text, ScrollView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Attendance_Tab() {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 10,
        minHeight: "20%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            margin: 10,
            marginLeft: 20,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          My Attendance
        </Text>
        <Text style={{ margin: 10, fontWeight: "500" }}>March(31Days)</Text>
        <Ionicons
          name="arrow-forward-outline"
          size={24}
          style={{ margin: 10, marginLeft: 110, color: "#FF7518" }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 52,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              margin: 8,
              marginTop: 20,
              backgroundColor: "#ADE4DB",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Total Days in Dec</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 20,
              backgroundColor: "#DAF5FF",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Absent</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 20,
              backgroundColor: "#ADE4DB",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Payable Day in Dec</Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <View
            style={{
              margin: 8,
              marginTop: 28,
              backgroundColor: "#FEF2F4",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Present</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 28,
              backgroundColor: "#FFF3E2",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>On Duty</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 28,
              backgroundColor: "#F5EBEB",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Week Off</Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <View
            style={{
              margin: 8,
              marginTop: 28,
              backgroundColor: "#FFF3E2",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Leaves Without Pay</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 28,
              backgroundColor: "#F5EBEB",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Holiday</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginTop: 28,
              backgroundColor: "#DAF5FF",
              width: "29%",
              height: "150%",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Text style={{ alignSelf: "center", marginLeft: 40 }}>
                20
                <Text>Leave</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
