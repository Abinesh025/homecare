import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import COLORS from "../components/constants/colors";

export const TAB_KEYS = {
  ALL: "all",
  UPCOMING: "upcoming",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

const tabs = [
  { label: "All", value: TAB_KEYS.ALL },
  { label: "Upcoming", value: TAB_KEYS.UPCOMING },
  { label: "In Progress", value: TAB_KEYS.IN_PROGRESS },
  { label: "Completed", value: TAB_KEYS.COMPLETED },
  { label: "Cancelled", value: TAB_KEYS.CANCELLED },
];

const BookingTabs = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.value;

          return (
            <TouchableOpacity
              key={tab.value}
              activeOpacity={0.8}
              style={styles.tab}
              onPress={() => onTabChange(tab.value)}
            >
              <Text
                style={[
                  styles.tabText,
                  active && styles.activeTabText,
                ]}
              >
                {tab.label}
              </Text>

              {active && <View style={styles.indicator} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BookingTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  scrollContainer: {
    paddingHorizontal: scale(20),
  },

  tab: {
    marginRight: scale(24),
    alignItems: "center",
    paddingVertical: verticalScale(14),
  },

  tabText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: "#94A3B8",
  },

  activeTabText: {
    color: COLORS.primary,
    fontWeight: "700",
  },

  indicator: {
    marginTop: verticalScale(8),
    width: "100%",
    height: verticalScale(3),
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
});