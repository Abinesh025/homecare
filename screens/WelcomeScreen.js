import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Calculate proportional heights based on each asset's real aspect ratio
const headerWidth = screenWidth;
const headerHeight =  screenHeight * 0.42; // cloud.png aspect ratio (1024x818)

const providerWidth = headerWidth * 1.15; // provider avatar relative to screen width
const providerHeight = providerWidth / 1.15; // provider.png aspect ratio (542x460)

const cityWidth = screenWidth;
const cityHeight = screenHeight * 0.30; // city.png skyline aspect ratio — adjust to match your actual asset

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Image
            source={require("../assets/images/cloud.png")}
            style={styles.headerBg}
            resizeMode="cover"
          />
          <Image
            source={require("../assets/images/provider.png")}
            style={styles.providerImage}
            resizeMode="contain"
          />
        </View>

        {/* Middle Section: Logo, Title & Feature Cards */}
        <View style={styles.middleSection}>
          <Image
            source={require("../assets/images/home.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />

          <Text style={styles.headingText}>
            Services that make{"\n"}homes better
          </Text>

          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <MaterialCommunityIcons
                  name="calendar-check-outline"
                  size={26}
                  color="#12B133"
                />
              </View>
              <Text style={styles.featureLabel}>Get Bookings{"\n"}Daily</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Ionicons name="location-outline" size={26} color="#12B133" />
              </View>
              <Text style={styles.featureLabel}>Reach & Serve{"\n"}Customers</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Ionicons name="wallet-outline" size={26} color="#12B133" />
              </View>
              <Text style={styles.featureLabel}>Earn More{"\n"}Everyday</Text>
            </View>
          </View>
        </View>

        {/* Bottom Section: City Skyline & Button */}
        <ImageBackground
          source={require("../assets/images/city.png")}
          style={styles.cityBg}
          resizeMode="cover"
        >
          <TouchableOpacity style={styles.startButton} activeOpacity={0.85}>
            <Text style={styles.startButtonText}>Let's Get Started</Text>
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
    alignItems: "center",
    paddingTop: StatusBar.currentHeight || 20,
  },

headerSection: {
  width: "100%",
  height: screenHeight * 0.42,
  overflow: "hidden",
  marginTop:-40
},

headerBg: {
  width: "100%",
  height: "100%",
},

providerImage: {
  position: "absolute",
  bottom: -10,
  alignSelf: "center",
  width: screenWidth * 1.06,
  height: 340,
  aspectRatio:542/460
},

middleSection: {
  width: "100%",
  alignItems: "center",
  paddingHorizontal: 24,
  marginTop: -110,
},

logoImage: {
  width: 315,
  height: undefined,
  aspectRatio: 1,
  alignSelf: "center",
},

  headingText: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    color: "#0F172A",
    lineHeight: 30,
    marginTop: -102,
    marginBottom: 8,
  },

  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 12
  },

  featureItem: {
    flex: 1,
    alignItems: "center",
  },

  featureIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a0e1ad38",
    borderRadius:10,
    padding:10
  },

  featureLabel: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "#1E293B",
    lineHeight: 16,
  },

  // ---- Bottom ----
  cityBg: {
  width: "100%",
  height: screenHeight * 0.35,
  marginTop:0,
  marginBottom:-40,
  justifyContent: "flex-end",
  alignItems: "center",
  paddingBottom: 100,
},

  startButton: {
    width: "80%",
    height: 56,
    backgroundColor: "#50ac62",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#12B133",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 0,
  },

  startButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
});