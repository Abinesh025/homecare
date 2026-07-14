import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const CancelBookingModal = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>

        <View style={styles.container}>

          <Text style={styles.title}>
            Cancel Booking?
          </Text>

          <Text style={styles.message}>
            Are you sure you want to cancel this booking?
            This action cannot be undone.
          </Text>

          <View style={styles.buttonRow}>

            <TouchableOpacity
              style={styles.noButton}
              onPress={onClose}
            >
              <Text style={styles.noText}>
                Keep Booking
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.yesButton}
              onPress={onConfirm}
            >
              <Text style={styles.yesText}>
                Cancel
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    </Modal>
  );
};

export default CancelBookingModal;

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "88%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(20),
    padding: moderateScale(22),
  },

  title: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.black,
    textAlign: "center",
  },

  message: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(15),
    color: "#6B7280",
    textAlign: "center",
    lineHeight: verticalScale(24),
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(24),
  },

  noButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(12),
    marginRight: scale(8),
    alignItems: "center",
  },

  yesButton: {
    flex: 1,
    backgroundColor: "#EF4444",
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(12),
    marginLeft: scale(8),
    alignItems: "center",
  },

  noText: {
    color: COLORS.primary,
    fontWeight: "700",
  },

  yesText: {
    color: "#fff",
    fontWeight: "700",
  },

});