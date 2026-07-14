import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const PriceBreakupModal = ({
  visible,
  booking,
  onClose,
}) => {

  const serviceCharge = booking?.serviceCharge || 1800;
  const convenienceFee = booking?.convenienceFee || 80;
  const gst = booking?.gst || 300;
  const discount = booking?.discount || 100;

  const total =
    serviceCharge +
    convenienceFee +
    gst -
    discount;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>

        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>
              Price Breakup
            </Text>

            <TouchableOpacity onPress={onClose}>
              <Ionicons
                name="close"
                size={24}
                color="#555"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Service Charge</Text>
            <Text style={styles.value}>₹ {serviceCharge}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Convenience Fee</Text>
            <Text style={styles.value}>₹ {convenienceFee}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>GST</Text>
            <Text style={styles.value}>₹ {gst}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.discount}>
              - ₹ {discount}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.totalLabel}>
              Grand Total
            </Text>

            <Text style={styles.total}>
              ₹ {total}
            </Text>
          </View>

        </View>

      </View>
    </Modal>
  );
};

export default PriceBreakupModal;

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: moderateScale(22),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },

  title: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.black,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(16),
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
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: verticalScale(15),
  },

  totalLabel: {
    fontSize: moderateScale(18),
    fontWeight: "700",
  },

  total: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    color: COLORS.primary,
  },

});