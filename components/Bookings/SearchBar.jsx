import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import COLORS from "../constants/colors";

const SearchBar = ({ value, onChangeText, onFilterPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={moderateScale(20)} color={COLORS.mediumGray} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search by service or location"
          placeholderTextColor={COLORS.mediumGray}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.filterButton} onPress={onFilterPress} activeOpacity={0.7}>
        <Text style={styles.filterText}>Filter</Text>
        <Ionicons name="options-outline" size={moderateScale(18)} color={COLORS.primary} />
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
    marginTop: verticalScale(16),
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: verticalScale(48),
    borderRadius: moderateScale(14),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
    paddingHorizontal: scale(14),

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: verticalScale(2) },
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: scale(8),
    fontSize: moderateScale(14),
    color: COLORS.black,
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(48),
    paddingHorizontal: scale(14),
    marginLeft: scale(10),
    borderRadius: moderateScale(14),
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: moderateScale(6),
    shadowOffset: { width: 0, height: verticalScale(2) },
    elevation: 2,
  },

  filterText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: COLORS.primary,
    marginRight: scale(6),
  },
});