import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import { useState } from "react";
import COLORS from "../components/constants/colors";
import CustomerCard from "../components/bookingDetails/CustomerCard";
import ServiceDetailsCard from "../components/bookingDetails/ServiceDetailsCard";
import LocationCard from "../components/bookingDetails/LocationCard";
import PaymentDetailsCard from "../components/bookingDetails/PaymentDetailsCard";
import BottomActionButtons from "../components/bookingDetails/BottomActionButtons";
import PriceSummaryCard from "../components/bookingDetails/PriceSummaryCard";

import PriceBreakupModal from "../components/bookingDetails/PriceBreakupModal";
import CancelBookingModal from "../components/bookingDetails/CancelBookingModal";
// Components
import BookingSummaryCard from "../components/bookingDetails/BookingSummaryCard";

const BookingDetailsScreen = ({ navigation, route }) => {

    const [showBreakup, setShowBreakup] = useState(false);
      const { booking } = route.params;
      const [showCancelModal, setShowCancelModal] = useState(false);

    const handleChat = () => {
  console.log("Chat");
};

const handleCall = () => {
  console.log("Call");
};

const handleReschedule = () => {
  console.log("Reschedule");
};

const handleCancel = () => {
      setShowCancelModal(false);
  console.log("Cancel Booking");
};
const confirmCancel = () => {
  setShowCancelModal(false);

  // TODO: Call your cancel booking API here
  console.log("Booking Cancelled");
};
return (
  <SafeAreaView style={styles.container}>

    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color={COLORS.black}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        Booking Details
      </Text>

      <TouchableOpacity style={styles.iconButton}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={COLORS.black}
        />
      </TouchableOpacity>
    </View>

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <BookingSummaryCard booking={booking} onViewBreakup={() => setShowBreakup(true)} />


      <ServiceDetailsCard booking={booking} />

         <PaymentDetailsCard booking={booking} />
         
      {/* Recommended position */}
      <PriceSummaryCard booking={booking} />


      <BottomActionButtons
        booking={booking}
        onChat={handleChat}
        onCall={handleCall}
        onReschedule={handleReschedule}
        onCancel={handleCancel}
      />
    </ScrollView>
                <PriceBreakupModal
                    visible={showBreakup}
                    booking={booking}
                    onClose={() => setShowBreakup(false)}
                    />
        <CancelBookingModal
        visible={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={confirmCancel}
        />
  </SafeAreaView>
);
};

export default BookingDetailsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF8F3",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
  },

  title: {
    fontSize: moderateScale(22),
    fontWeight: "700",
    color: COLORS.black,
  },

  iconButton: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(21),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  scrollContent: {
  paddingBottom: verticalScale(30),
},

});