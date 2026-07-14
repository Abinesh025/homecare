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

const PaymentDetailsCard = ({ booking }) => {
  return (
    <View style={styles.card}>

      {/* Heading */}

      <View style={styles.header}>
        <Ionicons
          name="wallet-outline"
          size={22}
          color={COLORS.primary}
        />

        <Text style={styles.heading}>
          Payment Details
        </Text>
      </View>

      {/* Payment Method */}

      <View style={styles.row}>
        <Text style={styles.label}>
          Payment Method
        </Text>

        <Text style={styles.value}>
          {booking?.paymentMethod || "Online"}
        </Text>
      </View>

      {/* Payment Status */}

      <View style={styles.row}>
        <Text style={styles.label}>
          Payment Status
        </Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>
            {booking?.paymentStatus || "Paid"}
          </Text>
        </View>
      </View>

      
      {/* Transaction */}

      <View style={styles.row}>
        <Text style={styles.label}>
          Paid On
        </Text>

        <Text style={styles.value}>
          {booking?.paidOn || "TXN45892134"}
        </Text>
      </View>

      {/* Price */}

      <View style={styles.totalDivider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>
          Total Amount
        </Text>

        <Text style={styles.totalValue}>
          {booking?.amount}
        </Text>
      </View>

    </View>
  );
};

export default PaymentDetailsCard;

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
    marginBottom: verticalScale(20),
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
    alignItems: "center",
    marginBottom: verticalScale(14),
  },

  label: {
    fontSize: moderateScale(15),
    color: "#6B7280",
  },

  value: {
    fontSize: moderateScale(15),
    color: COLORS.black,
    fontWeight: "600",
  },

  statusBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(20),
  },

  statusText: {
    color: "#15803D",
    fontWeight: "700",
    fontSize: moderateScale(13),
  },

  divider: {
    height: 1,
    backgroundColor: "#ECECEC",
    marginVertical: verticalScale(12),
  },

  totalDivider: {
    height: 1,
    backgroundColor: "#D1D5DB",
    marginVertical: verticalScale(12),
  },

  discount: {
    color: "#16A34A",
    fontWeight: "700",
    fontSize: moderateScale(15),
  },

  totalLabel: {
    fontSize: moderateScale(17),
    fontWeight: "700",
    color: COLORS.black,
  },

  totalValue: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.primary,
  },

});