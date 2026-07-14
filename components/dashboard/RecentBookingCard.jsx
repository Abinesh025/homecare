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



const RecentBookingCard = ({bookings}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Recent Bookings</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {bookings.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.85}
          style={styles.card}
        >
          {/* Left Icon */}
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="check-circle"
              size={24}
              color={COLORS.primary}
            />
          </View>

          {/* Details */}
          <View style={styles.details}>
            <Text style={styles.service}>{item.service}</Text>

            <Text style={styles.date}>{item.date}</Text>

            <View style={styles.locationRow}>
              <Ionicons
                name="location-outline"
                size={13}
                color={COLORS.textSecondary}
              />

              <Text style={styles.location}>
                {item.location}
              </Text>
            </View>
          </View>

          {/* Right */}
          <View style={styles.right}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {item.status}
              </Text>
            </View>

            <Text style={styles.amount}>
              {item.price}
            </Text>

            <MaterialCommunityIcons
              name="chevron-right"
              size={22}
              color={COLORS.textLight}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RecentBookingCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(20),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: verticalScale(14),
  },

  heading: {
    fontSize: moderateScale(17),
    fontWeight: "700",
    color: COLORS.text,
  },

  viewAll: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: moderateScale(13),
  },

  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: COLORS.white,

    borderRadius: moderateScale(18),

    padding: moderateScale(16),

    marginBottom: verticalScale(14),

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  iconContainer: {
    width: scale(50),
    height: scale(50),

    borderRadius: scale(25),

    backgroundColor: "#fef5e8",

    justifyContent: "center",
    alignItems: "center",

    marginRight: moderateScale(14),
  },

  details: {
    flex: 1,
  },

  service: {
    fontSize: moderateScale(15),
    fontWeight: "700",
    color: COLORS.text,
  },

  date: {
    marginTop: verticalScale(3),

    fontSize: moderateScale(12),
    color: COLORS.textSecondary,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: verticalScale(6),
  },

  location: {
    marginLeft: 4,

    fontSize: moderateScale(12),
    color: COLORS.textSecondary,
  },

  right: {
    alignItems: "flex-end",
    justifyContent: "space-between",

    height: scale(70),
  },

  badge: {
    backgroundColor: "#fff1dcb5",

    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(4),

    borderRadius: moderateScale(10),
  },

  badgeText: {
    color: COLORS.primary,
    fontSize: moderateScale(11),
    fontWeight: "700",
  },

  price: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: COLORS.text,
  },
});