import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "./constants/colors";

const StatusBadge = ({ status }) => {

  const getStatusStyle = () => {
    switch (status) {
      case "upcoming":
        return {
          backgroundColor: "#feefdb79",
          color: COLORS.primary,
        };

      case "in_progress":
        return {
          backgroundColor: "#cbfec789",
          color: "#06d918",
        };

      case "completed":
        return {
          backgroundColor: "#fcf3dc",
          color: COLORS.primary,
        };

      case "cancelled":
        return {
          backgroundColor: "#FEE2E2",
          color: "#DC2626",
        };

      default:
        return {
          backgroundColor: "#E5E7EB",
          color: "#475569",
        };
    }
  };

  const style = getStatusStyle();

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: style.backgroundColor }
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: style.color }
        ]}
      >
        {status.replace("_", " ")}
      </Text>
    </View>
  );
};

export default StatusBadge;


const styles = StyleSheet.create({

  badge:{
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:20,
    alignSelf:"flex-start",
  },

  text:{
    fontSize:12,
    fontWeight:"700",
    textTransform:"capitalize",
  },

});