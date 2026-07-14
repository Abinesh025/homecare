import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";
import COLORS from "../components/constants/colors";

const BookingHeader = ({
  notificationCount = 0,
  onNotificationPress,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bookings</Text>
        <Text style={styles.subtitle}>
          Manage all your service bookings
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.notificationButton}
        onPress={onNotificationPress}
      >
        <Ionicons
          name="notifications-outline"
          size={moderateScale(24)}
          color={COLORS.black}
        />

        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {notificationCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BookingHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: scale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(15),

    backgroundColor: COLORS.white,
  },

  title: {
    fontSize: moderateScale(28),
    fontWeight: "800",
    color: COLORS.black,
  },

  subtitle: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(13),
    color: "#6B7280",
  },

  notificationButton: {
    width: scale(46),
    height: scale(46),

    borderRadius: scale(23),

    backgroundColor: "#F9FAFB",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  badge: {
    position: "absolute",
    top: scale(2),
    right: scale(2),

    width: scale(18),
    height: scale(18),

    borderRadius: scale(9),

    backgroundColor: "#EF4444",

    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontWeight: "700",
  },
});