import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const EarningsCard = ({earnings}) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Earnings Overview</Text>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{earnings.period}</Text>

          <Ionicons
            name="chevron-down"
            size={16}
            color={COLORS.textSecondary}
          />
        </TouchableOpacity>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        {/* Earnings */}
        <View style={styles.item}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: "#f9f1e8" },
            ]}
          >
            <Ionicons
              name="wallet-outline"
              size={22}
              color={COLORS.primary}
            />
          </View>

          <Text style={styles.label}>Total Earnings</Text>

          <Text style={styles.value}>{earnings.total}</Text>
        </View>

        <View style={styles.divider} />

        {/* Jobs */}
        <View style={styles.item}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: COLORS.blueBg },
            ]}
          >
            <MaterialCommunityIcons
              name="briefcase-outline"
              size={22}
              color={COLORS.secondary}
            />
          </View>

          <Text style={styles.label}>Jobs Completed</Text>

          <Text style={styles.value}>{earnings.jobsCompleted}</Text>
        </View>

        <View style={styles.divider} />

        {/* Hours */}
        <View style={styles.item}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: COLORS.greenBg },
            ]}
          >
            <Ionicons
              name="time-outline"
              size={22}
              color="#36e02d"
            />
          </View>

          <Text style={styles.label}>Hours Worked</Text>

          <Text style={styles.value}>{earnings.hoursWorked}</Text>
        </View>
      </View>
    </View>
  );
};

export default EarningsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,

    borderRadius: moderateScale(18),

    padding: moderateScale(18),

    marginBottom: verticalScale(18),

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: verticalScale(20),
  },

  heading: {
    fontSize: moderateScale(17),
    fontWeight: "700",
    color: COLORS.text,
  },

  dropdown: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.background,

    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(6),

    borderRadius: moderateScale(20),
  },

  dropdownText: {
    marginRight: 4,

    fontSize: moderateScale(12),

    color: COLORS.textSecondary,
    fontWeight: "600",
  },

  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  item: {
    flex: 1,
    alignItems: "center",
  },

  divider: {
    width: 1,
    height: scale(90),

    backgroundColor: COLORS.divider,
  },

  iconContainer: {
    width: scale(52),
    height: scale(52),

    borderRadius: scale(2655),

    justifyContent: "center",
    alignItems: "center",

    marginBottom: verticalScale(10),
  },

  label: {
    fontSize: moderateScale(12),
    color: COLORS.textSecondary,

    textAlign: "center",

    marginBottom: verticalScale(5),
  },

  value: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.text,
  },
});