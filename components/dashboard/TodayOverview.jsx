import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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

import COLORS from "../constants/colors";


const TodayOverview = ({data}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
       <View style={styles.cardContain}>
      <View style={styles.header}>
        <Text style={styles.heading}>Today's Overview</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={[styles.card, { backgroundColor: item.background }]}
          >
           
        <Ionicons
            name={item.icon}
            size={20}
            color={item.color}
        />
      

            <Text style={styles.value}>{item.value}</Text>

            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </View>
  );
};

export default TodayOverview;

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(10),
  },
   cardContain: {
    backgroundColor: COLORS.white,
    
    borderRadius: moderateScale(18),

    padding: moderateScale(18),

    marginBottom: verticalScale(10),

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: verticalScale(14),
  },

  heading: {
    fontSize: moderateScale(17),
    fontWeight: "700",
    color: COLORS.text,
  },

  viewAll: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: moderateScale(13),
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "23%",
    height:"80%",
    gap:2,
    borderRadius: moderateScale(12),

    paddingVertical: verticalScale(18),

    alignItems: "center",

    marginBottom: verticalScale(14),

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,

    elevation: 3,
  },

  value: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.text,
  },

  label: {
    marginTop: verticalScale(5),

    textAlign: "center",

    fontSize: moderateScale(10),

    color: COLORS.textSecondary,
  },
});