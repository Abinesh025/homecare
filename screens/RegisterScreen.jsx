import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      {/* Header */}
      <View style={styles.headerSection}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#1E293B" />
        </TouchableOpacity>

        {/* Left Side Text */}
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>
            Create Your{"\n"}Provider Account
          </Text>

          <Text style={styles.subText}>
            Join HomeCare and start{"\n"}
            earning by helping{"\n"}
            customers.
          </Text>
        </View>

        {/* Right Side Image */}
        <Image
          source={require("../assets/images/icon.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>

      {/* Remaining Screen */}
      <View style={styles.body}>
        {/* Your registration form goes here */}
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerSection: {
    height: 245,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  backButton: {
    position: "absolute",
    top: 48,
    left: 16,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 10,
  },

  headingText: {
    fontSize: 29,
    fontWeight: "900",
    color: "#0F172A",
    lineHeight: 33,
    marginBottom: 10,
  },

  subText: {
    fontSize: 17,
    color: "#6B7280",
    lineHeight: 23,
    marginTop:4,
    marginBottom:10,
  },

  headerImage: {
    width: 180,
    height: 230,
    marginBottom: -20,
  },

  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});