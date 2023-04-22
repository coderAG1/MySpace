import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Leaves_Tab() {
  const screenHeight = Dimensions.get("screen").height;
  return (
    <View>
      <View
        style={{
          height: screenHeight,
          marginTop: 10,
          backgroundColor: "#eee",
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
            My Leaves
          </Text>

          <Ionicons
            name="arrow-forward-outline"
            size={24}
            style={{ margin: 10, marginLeft: 260, color: "#FF7518" }}
          />
        </View>
        <View style={{ height: "70%", display: "flex", flexDirection: "row" }}>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              backgroundColor: "#DAF5FF",
              width: "50%",
              height: "50%",
              borderTopStartRadius: 6,
              backgroundColor: "#F3E99F",
            }}
          >
            <View
              style={{
                height: "20%",
                backgroundColor: "#FF7518",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Earned Leave
              </Text>
            </View>
            <Text
              style={{
                margin: 10,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              12 <Text style={{ fontSize: 20, fontWeight: "300" }}>Left</Text>
            </Text>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Current Year{"        "}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                00
              </Text>
            </Text>
            <Text
              style={{
                margin: 10,
                marginTop: 1,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Availed{"                 "}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                00
              </Text>
            </Text>
            <View
              style={{
                marginLeft: 10,
                width: "90%",
                height: 1,
                backgroundColor: "black",
              }}
            />
            <Text
              style={{
                margin: 10,
                marginTop: 1,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Balance{"                "}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                00
              </Text>
            </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,

              width: "50%",
              height: "50%",
              borderTopStartRadius: 6,
              backgroundColor: "#B9E9FC",
            }}
          >
            <View
              style={{
                height: "20%",
                backgroundColor: "#05BFDB",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: 10,
                  fontSize: 20,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Earned Leave
              </Text>
            </View>
            <Text
              style={{
                margin: 10,
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              12 <Text style={{ fontSize: 20, fontWeight: "300" }}>Left</Text>
            </Text>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Current Year{"        "}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                00
              </Text>
            </Text>
            <Text
              style={{
                margin: 10,
                marginTop: 1,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Availed{"                 "}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                00
              </Text>
            </Text>
            <View
              style={{
                marginLeft: 10,
                width: "90%",
                height: 1,
                backgroundColor: "black",
              }}
            />
            <Text
              style={{
                margin: 10,
                marginTop: 1,
                fontSize: 20,
                fontWeight: "300",
              }}
            >
              Balance{"                "}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                00
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
