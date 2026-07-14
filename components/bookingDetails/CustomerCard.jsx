import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const CustomerCard = ({ booking }) => {
  return (
    <View style={styles.card}>

      {/* Header */}

      <View style={styles.header}>

        <View style={styles.titleContainer}>
          <Ionicons
            name="person-circle-outline"
            size={24}
            color={COLORS.primary}
          />

          <Text style={styles.title}>
            Customer Details
          </Text>
        </View>

        <TouchableOpacity style={styles.callButton}>
          <Ionicons
            name="call"
            size={18}
            color="#fff"
          />

          <Text style={styles.callText}>
            Call
          </Text>
        </TouchableOpacity>

      </View>

      {/* Customer Name */}

      <View style={styles.row}>
        <Ionicons
          name="person-outline"
          size={20}
          color="#6B7280"
        />

        <Text style={styles.value}>
          {booking?.customer}
        </Text>
      </View>

      {/* Phone */}

      <View style={styles.row}>
        <Ionicons
          name="call-outline"
          size={20}
          color="#6B7280"
        />

        <Text style={styles.value}>
          {booking?.phone}
        </Text>
      </View>

      {/* Email */}

      <View style={styles.row}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#6B7280"
        />

        <Text style={styles.value}>
          {booking?.email || "Not Available"}
        </Text>
      </View>

    </View>
  );
};

export default CustomerCard;

const styles = StyleSheet.create({

  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: scale(18),
    marginTop: verticalScale(16),
    borderRadius: moderateScale(18),
    padding: moderateScale(18),

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(18),
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    marginLeft: moderateScale(8),
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.black,
  },

  callButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(16),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(25),
  },

  callText: {
    color: "#fff",
    marginLeft: moderateScale(6),
    fontWeight: "600",
    fontSize: moderateScale(14),
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(16),
  },

  value: {
    marginLeft: moderateScale(12),
    fontSize: moderateScale(15),
    color: "#374151",
    flex: 1,
  },

});