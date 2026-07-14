import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import COLORS from "../components/constants/colors";

const BottomNavigation = ({ activeRoute, navigation }) => {
  
const tabs = [
  {
    key: "Dashboard",
    label: "Home",
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    key: "Bookings",
    label: "Bookings",
    icon: "calendar-outline",
    activeIcon: "calendar",
  },
  {
    key: "Earnings",
    label: "Earnings",
    icon: "wallet-outline",
    activeIcon: "wallet",
  },
  {
    key: "Profile",
    label: "Profile",
    icon: "person-outline",
    activeIcon: "person",
  },

  ];

  const handlePress = (tab) => {
  if (activeRoute === tab.key) {
    return;
  }

  navigation.navigate(tab.key);
};

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = activeRoute === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => handlePress(tab)}
          >
            <Ionicons
              name={active ? tab.activeIcon : tab.icon}
              size={moderateScale(24)}
              color={active ? COLORS.primary : "#94A3B8"}
            />

            <Text
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    height: verticalScale(70),

    backgroundColor: "#FFFFFF",

    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",

    paddingBottom: verticalScale(6),

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    elevation: 8,
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(11),
    color: "#94A3B8",
    fontWeight: "600",
  },

  activeLabel: {
    color: COLORS.primary,
    fontWeight: "700",
  },
});