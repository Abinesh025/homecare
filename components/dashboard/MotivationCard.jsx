import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import money from "../../assets/images/motivate.png";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const MotivationCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <LinearGradient
        colors={["#fdf6ec", "#faead1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Left Illustration */}
        <Image
          source={money}
          style={styles.image}
        />

        {/* Text */}
        <View style={styles.content}>
          <Text style={styles.title}>Keep going! 💪</Text>

          <Text style={styles.subtitle}>
            You're doing great.
            
            More bookings,{"\n"} more earnings! 🚀
          </Text>
        </View>

        {/* Arrow */}
        <MaterialCommunityIcons
          name="chevron-right"
          size={30}
          color={COLORS.lightGray}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MotivationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: moderateScale(20),

    padding: moderateScale(18),

    marginBottom: verticalScale(25),
  },

  image: {
    width: scale(70),
    height: scale(70),

    marginRight: moderateScale(14),
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.text,

    marginBottom: verticalScale(6),
  },

  subtitle: {
    fontSize: moderateScale(13),
    color: COLORS.textSecondary,

    lineHeight: moderateScale(20),
  },
});