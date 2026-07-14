import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const BottomActionButtons = ({
  booking,
  onChat,
  onCall,
  onReschedule,
  onCancel,
}) => {
  return (
    <View style={styles.container}>

      {/* First Row */}

      <View style={styles.row}>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => onChat?.(booking)}
        >
          <Ionicons
            name="chatbubble-outline"
            size={18}
            color={COLORS.primary}
          />

          <Text style={styles.outlineText}>
            Chat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => onCall?.(booking)}
        >
          <Ionicons
            name="call-outline"
            size={18}
            color={COLORS.primary}
          />

          <Text style={styles.outlineText}>
            Call
          </Text>
        </TouchableOpacity>

      </View>

      {/* Second Row */}

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => onReschedule?.(booking)}
      >
        <Ionicons
          name="calendar-outline"
          size={18}
          color="#fff"
        />

        <Text style={styles.primaryText}>
          Reschedule Booking
        </Text>
      </TouchableOpacity>

      {/* Cancel */}

      <TouchableOpacity
        onPress={() => onCancel?.(booking)}
      >
        <Text style={styles.cancelText}>
          Cancel Booking
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default BottomActionButtons;

const styles = StyleSheet.create({

  container: {
    marginHorizontal: scale(18),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(14),
  },

  outlineButton: {
    width: "48%",
    height: verticalScale(52),

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: moderateScale(14),

    backgroundColor: "#FFF8F3",
  },

  outlineText: {
    marginLeft: moderateScale(8),
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: moderateScale(15),
  },

  primaryButton: {
    height: verticalScale(54),

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(14),

    marginBottom: verticalScale(18),
  },

  primaryText: {
    marginLeft: moderateScale(8),
    color: "#fff",
    fontWeight: "700",
    fontSize: moderateScale(16),
  },

  cancelText: {
    textAlign: "center",
    color: "#EF4444",
    fontWeight: "700",
    fontSize: moderateScale(15),
  },

});