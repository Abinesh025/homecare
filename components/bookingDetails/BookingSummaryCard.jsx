import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";
import BookingInfo from "./BookingInfo";

const BookingSummaryCard = ({ booking ,  onViewBreakup}) => {
  const renderIcon = () => {
    switch (booking?.icon) {
      case "broom":
        return (
          <MaterialCommunityIcons
            name="broom"
            size={30}
            color={COLORS.primary}
          />
        );

      case "pipe-valve":
        return (
          <MaterialCommunityIcons
            name="pipe-valve"
            size={30}
            color={COLORS.primary}
          />
        );

      case "bathtub-outline":
        return (
          <MaterialCommunityIcons
            name="bathtub-outline"
            size={30}
            color={COLORS.primary}
          />
        );

      case "air-conditioner":
        return (
          <MaterialCommunityIcons
            name="air-conditioner"
            size={30}
            color={COLORS.primary}
          />
        );

      default:
        return (
          <MaterialCommunityIcons
            name="home-outline"
            size={30}
            color={COLORS.primary}
          />
        );
    }
  };

  return (
    <View style={styles.card}>
      {/* Top */}

      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainer}>
            {renderIcon()}
          </View>

          <View style={styles.serviceContainer}>
            <Text style={styles?.serviceName}>
              {booking?.service}
            </Text>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                {booking?.status}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>
            {booking?.amount}
          </Text>

          <Text style={styles.totalText}>
            Total Amount
          </Text>

          <TouchableOpacity onPress={onViewBreakup}>
            <Text style={styles.breakup}>
              View Breakup
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <BookingInfo booking={booking} />
    </View>
  );
};

export default BookingSummaryCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: scale(18),
    marginTop: verticalScale(15),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(18),
    padding: moderateScale(18),
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftContainer: {
    flexDirection: "row",
    flex: 1,
  },

  iconContainer: {
    width: scale(68),
    height: scale(68),
    borderRadius: scale(34),
    backgroundColor: "#FFF4EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(14),
  },

  serviceContainer: {
    flex: 1,
    justifyContent: "center",
  },

  serviceName: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.black,
  },

  statusBadge: {
    marginTop: verticalScale(8),
    backgroundColor: "#FFF4EB",
    alignSelf: "flex-start",
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(20),
  },

  statusText: {
    color: COLORS.primary,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  amountContainer: {
    alignItems: "flex-end",
  },

  amount: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    color: COLORS.black,
  },

  totalText: {
    color: "#6B7280",
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
  },

  breakup: {
    color: COLORS.primary,
    marginTop: verticalScale(10),
    fontWeight: "600",
    fontSize: moderateScale(13),
  },

  divider: {
    height: 1,
    backgroundColor: "#ECECEC",
    marginVertical: verticalScale(18),
  },
});