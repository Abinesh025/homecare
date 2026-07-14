import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import COLORS from "../constants/colors";

const STATUS_MAP = {
  upcoming: { label: "Upcoming", bg: COLORS.upcomingBg, text: COLORS.upcomingText },
  in_progress: { label: "In Progress", bg: COLORS.inProgressBg, text: COLORS.inProgressText },
  completed: { label: "Completed", bg: COLORS.completedBg, text: COLORS.completedText },
  cancelled: { label: "Cancelled", bg: COLORS.cancelledBg, text: COLORS.cancelledText },
};

const StatusBadge = ({ status }) => {
  const config = STATUS_MAP[status] || STATUS_MAP.upcoming;

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <Text style={[styles.text, { color: config.text }]}>{config.label}</Text>
    </View>
  );
};

export default StatusBadge;

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(4),
    borderRadius: moderateScale(20),
    alignSelf: "flex-start",
  },
  text: {
    fontSize: moderateScale(11),
    fontWeight: "700",
  },
}); 