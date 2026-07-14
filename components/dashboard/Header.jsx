import React from "react";
import {
  View,
  Text,
 StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

import { Ionicons } from "@expo/vector-icons";

import COLORS from "../constants/colors";

const Header = ({user}) => {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <View style={styles.imageContainer}>
          <Image
            source={user.profile}
            style={styles.profile}
          />

          <View style={styles.onlineDot} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.name}>{user.name} 👋</Text>
        </View>
      </View>

      {/* Notification */}
      <TouchableOpacity activeOpacity={0.8} style={styles.notificationBtn}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={COLORS.black}
        />

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{user.notifications}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(8),
    marginBottom: verticalScale(20),

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  imageContainer: {
    position: "relative",
  },

  profile: {
    width: scale(58),
    height: scale(58),
    borderRadius: scale(29),
  },

  onlineDot: {
    position: "absolute",
    bottom: 2,
    right: 2,

    width: scale(14),
    height: scale(14),
    borderRadius: scale(7),

    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.white,
  },

  textContainer: {
    marginLeft: moderateScale(14),
  },

  greeting: {
    fontSize: moderateScale(13),
    color: COLORS.textSecondary,
    marginBottom: verticalScale(3),
  },

  name: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.text,
  },

  notificationBtn: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),

    backgroundColor: COLORS.white,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  badge: {
    position: "absolute",
    top: 8,
    right: 8,

    minWidth: scale(18),
    height: scale(18),
    borderRadius: scale(9),

    backgroundColor: COLORS.danger,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 4,
  },

  badgeText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: moderateScale(10),
  },
});