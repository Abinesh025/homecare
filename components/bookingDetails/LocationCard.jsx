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

const LocationCard = ({ booking }) => {
  return (
    <View style={styles.card}>

      {/* Header */}

      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Ionicons
            name="location"
            size={22}
            color={COLORS.primary}
          />

        <Text style={styles.address}>
          {booking?.location}
        </Text>
      
        </View>

        <TouchableOpacity style={styles.mapButton}>
          <Ionicons
            name="map-outline"
            size={16}
            color={COLORS.primary}
          />

          <Text style={styles.mapText}>
            View Map
          </Text>
        </TouchableOpacity>
      </View>

      {/* Address */}

      <Text style={styles.address}>
        {booking?.location}
      </Text>

    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({

  card: {
    marginHorizontal: scale(18),
    marginTop: verticalScale(16),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(18),
    padding: moderateScale(18),

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    marginLeft: moderateScale(8),
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.black,
  },

  mapButton: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFF4EB",

    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(7),

    borderRadius: moderateScale(25),
  },

  mapText: {
    marginLeft: moderateScale(5),
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: moderateScale(13),
  },

  address: {
    marginTop: verticalScale(18),

    fontSize: moderateScale(15),
    lineHeight: verticalScale(24),

    color: "#4B5563",
  },

});