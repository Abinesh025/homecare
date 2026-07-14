import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import COLORS from "../constants/colors";

const BookingHeader = ({ notificationCount = 0, onNotificationPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookings</Text>

      <TouchableOpacity
        style={styles.bellButton}
        onPress={onNotificationPress}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons name="notifications-outline" size={moderateScale(26)} color={COLORS.black} />

        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
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
    paddingTop: verticalScale(55),
    paddingHorizontal: scale(20),
  },

  title: {
    fontSize: moderateScale(28),
    fontWeight: "800",
    color: COLORS.black,
  },

  bellButton: {
    width: scale(44),
    height: scale(44),
    justifyContent: "center",
    alignItems: "center",
  },

  badge: {
    position: "absolute",
    top: scale(2),
    right: scale(2),
    minWidth: scale(18),
    height: scale(18),
    borderRadius: scale(9),
    backgroundColor: COLORS.cancelledText,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(3),
    borderWidth: 1.5,
    borderColor: COLORS.white,
  },

  badgeText: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontWeight: "700",
  },
});