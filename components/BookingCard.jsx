import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../components/constants/colors";
import StatusBadge from "./StatusBadge";

const BookingCard = ({
  booking,
  onChat,
  onViewDetails,
  onCall,
  onMarkCompleted,
  onViewInvoice,
}) => {
    const renderIcon = () => {
  switch (booking.icon) {
    case "broom":
      return (
        <MaterialCommunityIcons
          name="broom"
          size={28}
          color={COLORS.primary}
        />
      );

    case "pipe-valve":
      return (
        <MaterialCommunityIcons
          name="pipe-valve"
          size={26}
          color={COLORS.primary}
        />
      );

    case "sofa-outline":
      return (
        <MaterialCommunityIcons
          name="sofa-outline"
          size={26}
          color={COLORS.primary}
        />
      );

    case "bathtub-outline":
      return (
        <MaterialCommunityIcons
          name="bathtub-outline"
          size={26}
          color={COLORS.primary}
        />
      );

    case "air-conditioner":
      return (
        <MaterialCommunityIcons
          name="air-conditioner"
          size={26}
          color={COLORS.primary}
        />
      );

    default:
      return (
        <MaterialCommunityIcons
          name="home-outline"
          size={26}
          color={COLORS.primary}
        />
      );
  }
};
return (
  <View style={styles.card}>
    <View style={styles.header}>
  <View style={styles.left}>
    <View style={styles.iconContainer} >
      {renderIcon()}
    </View>

    <View>
      <Text style={styles.service}>
        {booking.service}
      </Text>
 <StatusBadge status={booking.status} />
  
    </View>
  </View>

  <Text style={styles.amount}>
    {booking.amount}
  </Text>
</View>
<View style={styles.detailsSection}>

  <View style={styles.detailsContainer}>
    {/* Row 1 */}
    <View style={styles.row}>
      <View style={styles.item}>
        <Ionicons name="calendar-outline" size={18} color="#64748B" />
        <Text style={styles.info}>{booking.date}</Text>
      </View>

      <View style={styles.item}>
        <Ionicons name="time-outline" size={15} color="#64748B" />
        <Text style={styles.info}>{booking.time}</Text>
      </View>
    </View>

    {/* Row 2 */}
    <View style={styles.locationRow}>
      <Ionicons name="location-outline" size={18} color="#64748B" />
      <Text style={styles.info}>{booking.location}</Text>
    </View>

    {/* Row 3 */}
    <View style={styles.row}>
      <View style={styles.item}>
        <Ionicons name="person-outline" size={18} color="#64748B" />
        <Text style={styles.info}>{booking.customer}</Text>
      </View>

      <View style={styles.item}>
        <Ionicons name="call-outline" size={18} color="#64748B" />
        <Text style={styles.info}>{booking.phone}</Text>
      </View>
    </View>
  </View>

  <TouchableOpacity
    style={styles.arrowButton}
    onPress={() => onViewDetails(booking)}
  >
    <Ionicons
      name="chevron-forward"
      size={22}
      color="#94A3B8"
    />
  </TouchableOpacity>

</View>
<View style={styles.divider} />
{/* Action Buttons */}

<View style={styles.buttonContainer}>

  {booking.status === "upcoming" && (
    <>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => onChat(booking)}
      >
        <Ionicons
          name="chatbubble-outline"
          size={18}
          color={COLORS.primary}
        />
        <Text style={styles.secondaryButtonText}>
          Chat
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => onViewDetails(booking)}
      >
        <Text style={styles.primaryButtonText}>
          View Details
        </Text>
      </TouchableOpacity>
    </>
  )}

  {booking.status === "in_progress" && (
    <>
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => onCall(booking)}
      >
        <Ionicons
          name="call-outline"
          size={18}
          color={COLORS.primary}
        />
        <Text style={styles.secondaryButtonText}>
          Call
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => onMarkCompleted(booking)}
      >
        <Text style={styles.primaryButtonText}>
          Mark Completed
        </Text>
      </TouchableOpacity>
    </>
  )}

  {booking.status === "completed" && (
    <TouchableOpacity
      style={styles.primaryButtonFull}
      onPress={() => onViewInvoice(booking)}
    >
      <Ionicons
        name="document-text-outline"
        size={18}
        color="#fff"
      />

      <Text style={styles.primaryButtonText}>
        View Invoice
      </Text>
    </TouchableOpacity>
  )}

  {booking.status === "cancelled" && (
    <View style={styles.cancelledContainer}>
      <Text style={styles.cancelledText}>
        Booking Cancelled
      </Text>
    </View>
  )}

</View>
  </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#fff",
    borderRadius:18,
    
    padding:18,

    marginBottom:18,

    shadowColor:"#000",
    shadowOpacity:0.08,
    shadowRadius:8,

    shadowOffset:{
      width:0,
      height:2,
    },

    elevation:4,
  },
    item: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start",
    marginBottom:15,
  },

  left:{
    flexDirection:"row",
    flex:1,
  },

  iconContainer:{
    width:50,
    height:50,
    borderRadius:28,
    backgroundColor:"#fff8f0",

    justifyContent:"center",
    alignItems:"center",

    marginRight:12,
  },

  service:{
    fontSize:17,
    fontWeight:"700",
    color:"#1E293B",

    marginBottom:8,
  },

  amount:{
    fontSize:18,
    fontWeight:"800",
    color:COLORS.black,
  
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  info:{
    marginLeft:10,
    color:"#475569",
    fontSize:14,
    flex:1,
  },

  divider:{
    height:1,
    backgroundColor:"#E5E7EB",

    marginVertical:15,
  },

  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  secondaryButton:{
    flex:1,

    flexDirection:"row",

    justifyContent:"center",
    alignItems:"center",

    height:46,

    borderRadius:12,

    borderWidth:1,
    borderColor:COLORS.primary,

    marginRight:10,
  },

  secondaryButtonText:{
    color:COLORS.primary,
    fontWeight:"700",
    marginLeft:6,
  },

  primaryButton:{
    flex:1,

    height:46,

    borderRadius:12,

    backgroundColor:COLORS.primary,

    justifyContent:"center",
    alignItems:"center",
  },

  primaryButtonFull:{
    flex:1,

    flexDirection:"row",

    justifyContent:"center",
    alignItems:"center",

    height:46,

    borderRadius:12,

    backgroundColor:COLORS.primary,
  },

  primaryButtonText:{
    color:"#fff",
    fontWeight:"700",
    marginLeft:6,
  },

  cancelledContainer:{
    flex:1,

    justifyContent:"center",
    alignItems:"center",

    height:46,

    backgroundColor:"#FEE2E2",

    borderRadius:12,
  },

  cancelledText:{
    color:"#DC2626",
    fontWeight:"700",
  },  infoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },


  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailsSection: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
   detailsContainer: {
    marginTop: 10,
    flex:1,
  },
  arrowButton: {
  marginLeft: -10,
  justifyContent: "center",
  alignItems: "center",
},
    info: {
    marginLeft: 5,
    color: "#64748B",
    
    fontSize:12,
  },

});