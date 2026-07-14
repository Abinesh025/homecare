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


const ServiceDetailsCard = ({ booking }) => {

  const servicesLeft = [
    "Kitchen Cleaning",
    "Bathroom Cleaning",
    "Floor Cleaning",
  ];

  const servicesRight = [
    "Dusting & Wiping",
    "Garbage Removal",
    "Surface Disinfection",
  ];


  const ServiceItem = ({ item }) => (
    <View style={styles.row}>
      <Ionicons
        name="checkmark-circle-outline"
        size={18}
        color="#ee9510"
      />

      <Text style={styles.serviceText}>
        {item}
      </Text>
    </View>
  );


  return (
    <View style={styles.card}>

      <Text style={styles.heading}>
        Service Details
      </Text>


      <View style={styles.servicesContainer}>

        <View style={styles.column}>
          {servicesLeft.map((item,index)=>(
            <ServiceItem
              key={index}
              item={item}
            />
          ))}
        </View>


        <View style={styles.column}>
          {servicesRight.map((item,index)=>(
            <ServiceItem
              key={index}
              item={item}
            />
          ))}
        </View>

      </View>


      <View style={styles.instructionBox}>

        <Ionicons
          name="information-circle-outline"
          size={18}
          color="#ec9d25"
        />


        <Text style={styles.instructions}>
          <Text style={styles.bold}>
            Special Instructions:{" "}
          </Text>

          {booking?.instructions ||
            "Please focus on kitchen deep cleaning."}
        </Text>

      </View>


    </View>
  );
};


export default ServiceDetailsCard;

const styles = StyleSheet.create({

  card:{
    backgroundColor:"#fff",
    marginHorizontal:scale(18),
    marginTop:verticalScale(16),
    borderRadius:moderateScale(14),
    padding:moderateScale(16),

    elevation:3,
    shadowColor:"#000",
    shadowOpacity:0.08,
    shadowRadius:8,
  },


  heading:{
    fontSize:moderateScale(16),
    fontWeight:"700",
    color:COLORS.black,
    marginBottom:verticalScale(14),
  },


  servicesContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },


  column:{
    width:"48%",
  },


  row:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:verticalScale(10),
  },


  serviceText:{
    marginLeft:scale(8),
    fontSize:moderateScale(13),
    color:"#4B5563",
  },


  instructionBox:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fbf7f2",
    borderWidth:1,
    borderColor:"#fdecd6",
    borderRadius:moderateScale(8),
    padding:scale(10),
    marginTop:verticalScale(8),
  },


  instructions:{
    flex:1,
    marginLeft:scale(8),
    fontSize:moderateScale(12),
    color:"#6B7280",
    lineHeight:verticalScale(18),
  },


  bold:{
    color:"#f7a324",
    fontWeight:"700",
  },

});