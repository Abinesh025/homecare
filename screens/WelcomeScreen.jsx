import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Calculate proportional heights based on each asset's real aspect ratio
const headerWidth = screenWidth;
const headerHeight =  screenHeight * 0.42; // cloud.png aspect ratio (1024x818)

const providerWidth = headerWidth * 1.15; // provider avatar relative to screen width
const providerHeight = providerWidth / 1.15; // provider.png aspect ratio (542x460)

const cityWidth = screenWidth;
const cityHeight = screenHeight * 0.30; // city.png skyline aspect ratio — adjust to match your actual asset

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
  <StatusBar
    barStyle="dark-content"
    backgroundColor="transparent"
    translucent
  />

  <ScrollView
    contentContainerStyle={styles.scrollContent}
    showsVerticalScrollIndicator={false}
  >
    {/* Header */}
    <View style={styles.headerSection}>
      <Image
        source={require("../assets/images/cloud.jpeg")}
        style={styles.headerBg}
        resizeMode="cover"
      />

      <Image
        source={require("../assets/images/provider.png")}
        style={styles.providerImage}
        resizeMode="contain"
      />
    </View>

    {/* Middle */}
    <View style={styles.middleSection}>
      <Image
        source={require("../assets/images/logo.jpeg")}
        style={styles.logoImage}
      />

      <Text style={styles.headingText}>
        Services that make{"\n"}homes better
      </Text>

      <View style={styles.featuresContainer}>
        {/* Feature 1 */}
        <View style={styles.featureItem}>
          <View style={styles.featureIconContainer}>
            <MaterialCommunityIcons
              name="calendar-check-outline"
              size={26}
              color="#da8415"
            />
          </View>
          <Text style={styles.featureLabel}>
            Get Bookings{"\n"}Daily
          </Text>
        </View>

        {/* Feature 2 */}
        <View style={styles.featureItem}>
          <View style={styles.featureIconContainer}>
            <Ionicons
              name="location-outline"
              size={26}
              color="#da8415"
            />
          </View>
          <Text style={styles.featureLabel}>
            Reach & Serve{"\n"}Customers
          </Text>
        </View>

        {/* Feature 3 */}
        <View style={styles.featureItem}>
          <View style={styles.featureIconContainer}>
            <Ionicons
              name="wallet-outline"
              size={26}
              color="#da8415"
            />
          </View>
          <Text style={styles.featureLabel}>
            Earn More{"\n"}Everyday
          </Text>
        </View>
      </View>
    </View>

    {/* Bottom */}
    <ImageBackground
      source={require("../assets/images/city.jpeg")}
      style={styles.cityBg}
      resizeMode="cover"
    >
      <TouchableOpacity
        style={styles.startButton}
        activeOpacity={0.85}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.startButtonText}>
          Let's Get Started
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  </ScrollView>
</SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollContent: {
    flexGrow: 1,
  
    justifyContent:"space-between",
   
    
  },

  // Header
  headerSection: {
    width: "100%",
    height: verticalScale(260),
    overflow: "hidden",
  },

  headerBg: {
    width: "100%",
    height: "100%",
  },

  providerImage: {
    position: "absolute",
    bottom: -verticalScale(55),
    alignSelf: "center",
    width: scale(270),
    aspectRatio: 542 / 460,
    resizeMode: "contain",
  },

  // Middle
  middleSection: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: moderateScale(24),
    marginBottom: verticalScale(57),
  },

  logoImage: {
    width: scale(190),
     height: verticalScale(65),
     aspectRatio: 612 / 120,
    resizeMode: "contain",
    alignSelf: "center",
  },

  headingText: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
    textAlign: "center",
    color: "#0F172A",
    lineHeight: moderateScale(40),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    paddingHorizontal: moderateScale(20),
  },

  // Features
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(12),
  },

  featureItem: {
    flex: 1,
    alignItems: "center",
  },

  featureIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9deae38",
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
  },

  featureLabel: {
    marginTop: verticalScale(8),
    fontSize: moderateScale(13),
    fontWeight: "600",
    textAlign: "center",
    color: "#1E293B",
    lineHeight: moderateScale(18),
  },

  // Bottom
  cityBg: {
    width: "100%",
    aspectRatio: 1024 / 420,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(24),
  },

  startButton: {
    width: "85%",
    height: verticalScale(56),
    backgroundColor: "#120a3d",
    borderRadius: moderateScale(14),
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#080837",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  startButtonText: {
    color: "#ffffff",
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
});