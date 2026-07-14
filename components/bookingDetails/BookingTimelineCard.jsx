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


const BookingInfoCard = ({ booking }) => {

  return (
    <View style={styles.card}>

      {/* Date */}
      <View style={styles.item}>

        <Ionicons
          name="calendar-outline"
          size={20}
          color={COLORS.primary}
        />

        <View style={styles.textContainer}>
          <Text style={styles.label}>
            Date
          </Text>

          <Text style={styles.value}>
            {booking?.date || "Sat, 25 May 2026"}
          </Text>
        </View>

      </View>


      {/* Divider */}
      <View style={styles.divider}/>


      {/* Time */}
      <View style={styles.item}>

        <Ionicons
          name="time-outline"
          size={20}
          color={COLORS.primary}
        />

        <View style={styles.textContainer}>

          <Text style={styles.label}>
            Time
          </Text>

          <Text style={styles.value}>
            {booking?.time || "10:00 AM - 12:00 PM"}
          </Text>

          <Text style={styles.subText}>
            ({booking?.duration || "2 Hours"})
          </Text>

        </View>

      </View>


      {/* Divider */}
      <View style={styles.divider}/>


      {/* Cleaners */}
      <View style={styles.item}>

        <Ionicons
          name="people-outline"
          size={20}
          color={COLORS.primary}
        />

        <View style={styles.textContainer}>

          <Text style={styles.label}>
            Cleaners
          </Text>

          <Text style={styles.value}>
            {booking?.cleaners || "2 Cleaners"}
          </Text>

        </View>

      </View>


    </View>
  );
};


export default BookingInfoCard;



const styles = StyleSheet.create({

  card:{
    backgroundColor:"#fff",

    marginHorizontal:scale(18),
    marginTop:verticalScale(15),

    borderRadius:moderateScale(14),

    paddingVertical:verticalScale(16),
    paddingHorizontal:scale(14),

    flexDirection:"row",
    alignItems:"center",

    elevation:3,

    shadowColor:"#000",
    shadowOpacity:0.08,
    shadowRadius:8,
  },


  item:{
    flex:1,

    flexDirection:"row",
    alignItems:"center",
  },


  divider:{
    width:1,
    height:verticalScale(42),
    backgroundColor:"#E5E7EB",

    marginHorizontal:scale(10),
  },


  textContainer:{
    marginLeft:scale(8),
  },


  label:{
    fontSize:moderateScale(12),
    color:"#6B7280",
    marginBottom:verticalScale(3),
  },


  value:{
    fontSize:moderateScale(13),
    fontWeight:"600",
    color:COLORS.black,
  },


  subText:{
    fontSize:moderateScale(12),
    color:"#6B7280",
    marginTop:verticalScale(2),
  },

});