import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";
import COLORS from "../components/constants/colors";

const SearchBar = ({
  value,
  onChangeText,
  onFilterPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={moderateScale(20)}
          color="#94A3B8"
        />

        <TextInput
          style={styles.input}
          placeholder="Search by service or location"
          placeholderTextColor="#94A3B8"
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.filterButton}
        onPress={onFilterPress}
      >
        <MaterialCommunityIcons
          name="tune-variant"
          size={moderateScale(22)}
          color={COLORS.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: scale(20),
    marginTop: verticalScale(18),
    marginBottom: verticalScale(10),
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F8FAFC",

    borderRadius: moderateScale(14),

    paddingHorizontal: scale(15),

    height: verticalScale(50),

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,

    marginLeft: scale(10),

    fontSize: moderateScale(14),

    color: COLORS.black,
  },

  filterButton: {
    width: scale(50),
    height: scale(50),

    borderRadius: moderateScale(14),

    marginLeft: scale(12),

    backgroundColor: "#F8FAFC",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E5E7EB",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
});