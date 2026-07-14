import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import COLORS from "../constants/colors";

export const TAB_KEYS = {
  ALL: "all",
  UPCOMING: "upcoming",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

const TABS = [
  { key: TAB_KEYS.ALL, label: "All" },
  { key: TAB_KEYS.UPCOMING, label: "Upcoming" },
  { key: TAB_KEYS.IN_PROGRESS, label: "In Progress" },
  { key: TAB_KEYS.COMPLETED, label: "Completed" },
  { key: TAB_KEYS.CANCELLED, label: "Cancelled" },
];

const BookingTabs = ({ activeTab, onTabChange }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabWrapper}
            onPress={() => onTabChange(tab.key)}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
              {tab.label}
            </Text>
            <View style={[styles.underline, isActive && styles.underlineActive]} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default BookingTabs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(18),
  },

  tabWrapper: {
    marginRight: scale(22),
    alignItems: "center",
  },

  tabText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: COLORS.mediumGray,
    paddingBottom: verticalScale(10),
  },

  tabTextActive: {
    color: COLORS.primary,
    fontWeight: "700",
  },

  underline: {
    height: moderateScale(3),
    width: "100%",
    borderRadius: moderateScale(2),
    backgroundColor: "transparent",
  },

  underlineActive: {
    backgroundColor: COLORS.primary,
  },
});