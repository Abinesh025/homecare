import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const UpcomingBookingCard = ({booking}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Upcoming Booking</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Booking Card */}
      <TouchableOpacity activeOpacity={0.9} style={styles.card}>
        {/* Time */}
        <View style={styles.timeBox}>
          <Text style={styles.time}> {booking.time.split(" ")[0]}</Text>
          <Text style={styles.amPm}>{booking.time.split(" ")[1]}</Text>
        </View>

        {/* Middle */}
        <View style={styles.middle}>
    <View style={styles.iconBox}>
  <MaterialCommunityIcons
    name={booking.icon}
    size={30}
    color="#9cf37c"
  />
</View>

          <View style={styles.details}>
            <Text style={styles.service}>{booking.service}</Text>

            <Text style={styles.subtitle}>
                {booking.duration} • {booking.cleaners}
            </Text>

            <View style={styles.locationRow}>
              <Ionicons
                name="location"
                size={14}
                color={COLORS.primary}
              />

              <Text style={styles.location}>
                {booking.location}
              </Text>
            </View>
          </View>
        </View>

        {/* Right */}
        <View style={styles.right}>
          <View style={styles.status}>
            <Text style={styles.statusText}>{booking.status}</Text>
          </View>

          <Text style={styles.price}>{booking.amount}</Text>

          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color={COLORS.textSecondary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UpcomingBookingCard;

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
    fontSize: moderateScale(13),
    fontWeight: "600",
  },

  card: {
    backgroundColor: COLORS.white,

    borderRadius: moderateScale(18),

    padding: moderateScale(16),

    flexDirection: "row",

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },
  iconBox: {
  width: scale(46),
  height: scale(46),
marginTop:scale(13),
  borderRadius: scale(28),

  backgroundColor:COLORS.primaryLight,

  justifyContent: "center",
  alignItems: "center",

  marginRight: moderateScale(10),
},

  timeBox: {
    width: scale(60),
    height: scale(70),

    borderRadius: moderateScale(14),

    backgroundColor: "#fff9efe2",

    justifyContent: "center",
    alignItems: "center",

    marginRight: moderateScale(14),
  },

  time: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.primary,
  },

  amPm: {
    marginTop: 2,
    fontSize: moderateScale(12),
    color: COLORS.primary,
    fontWeight: "600",
  },

  middle: {
    flex: 1,
    flexDirection: "row",
  },

  image: {
    width: scale(56),
    height: scale(56),

    borderRadius: scale(28),

    marginRight: moderateScale(12),
  },

  details: {
    flex: 1,
    justifyContent: "center",
  },

  service: {
    fontSize: moderateScale(15),
    fontWeight: "700",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: verticalScale(4),

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
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  status: {
    backgroundColor: "#fcf5ed",

    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),

    borderRadius: moderateScale(10),
  },

  statusText: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: moderateScale(11),
  },

  price: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.text,
  },
});