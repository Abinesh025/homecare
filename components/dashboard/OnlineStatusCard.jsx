import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const OnlineStatusCard = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <View style={styles.card}>
      {/* Left Section */}
      <View style={styles.leftSection}>

        
<View style={styles.iconContainer}>
  <MaterialCommunityIcons
    name={isOnline ? "shield-check" : "shield-remove"}
    size={26}
    color={isOnline ? COLORS.primary : COLORS.primary}
  />
</View>
            {isOnline ? <>
                  <View>
                <Text style={styles.title}>You are Online</Text>
                <Text style={styles.subtitle}>
                    Ready to receive bookings
                </Text>
            </View>
            </> : <>
                  <View>
                <Text style={styles.title}>You are offline</Text>
                <Text style={styles.subtitle}>
                    Activate Your Account
                </Text>
            </View>
            </>}
      
      </View>

      {/* Toggle */}
      <Switch
        value={isOnline}
        onValueChange={setIsOnline}
        trackColor={{
          false: "#D1D5DB",
          true: COLORS.primary,
        }}
        thumbColor={COLORS.white}
      />
    </View>
  );
};

export default OnlineStatusCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f0e9",

    borderRadius: moderateScale(18),

    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(16),

    marginBottom: verticalScale(18),

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#fceddc",

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,

    elevation: 3,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: scale(52),
    height: scale(52),
    borderRadius: scale(30),

    backgroundColor: "#f8e3ce",

    justifyContent: "center",
    alignItems: "center",

    marginRight: moderateScale(14),
  },

  title: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: verticalScale(3),

    fontSize: moderateScale(13),

    color: COLORS.textSecondary,
  },
});