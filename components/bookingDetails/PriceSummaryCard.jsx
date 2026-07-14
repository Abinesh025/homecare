import React from "react";
import {
  View,
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

const PriceSummaryCard = ({ booking }) => {

  const serviceCharge = booking?.serviceCharge || 1800;
  const convenienceFee = booking?.convenienceFee || 180;
  const gst = booking?.gst || 200;
  const discount = booking?.discount || 0;

  const total =
    serviceCharge +
    convenienceFee +
    gst -
    discount;

  return (
    <View style={styles.card}>

      {/* Header */}

      <View style={styles.header}>


        <Text style={styles.heading}>
          Price Summary
        </Text>

      </View>

      {/* Service */}

      <View style={styles.row}>
        <Text style={styles.label}>
          Base Fare
        </Text>

        <Text style={styles.value}>
          ₹ {serviceCharge}
        </Text>
      </View>

      {/* Convenience */}

      <View style={styles.row}>
        <Text style={styles.label}>
          Platform Fee
        </Text>

        <Text style={styles.value}>
          ₹ {convenienceFee}
        </Text>
      </View>

      {/* GST */}

      <View style={styles.row}>
        <Text style={styles.label}>
          GST (18%)
        </Text>

        <Text style={styles.value}>
          ₹ {gst}
        </Text>
      </View>


      <View style={styles.divider} />

      {/* Total */}

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>
          Total Amount
        </Text>

        <Text style={styles.totalValue}>
          ₹ {total}
        </Text>
      </View>

    </View>
  );
};

export default PriceSummaryCard;

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    marginHorizontal: scale(18),
    marginTop: verticalScale(16),
    borderRadius: moderateScale(18),
    padding: moderateScale(18),

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(18),
  },

  heading: {
    marginLeft: moderateScale(8),
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: COLORS.black,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(12),
  },

  label: {
    fontSize: moderateScale(15),
    color: "#6B7280",
  },

  value: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: COLORS.black,
  },

  discount: {
    color: "#16A34A",
    fontWeight: "700",
    fontSize: moderateScale(15),
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: verticalScale(15),
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: moderateScale(17),
    fontWeight: "700",
    color: COLORS.black,
  },

  totalValue: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    color: COLORS.primary,
  },

});