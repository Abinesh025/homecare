import React, { useState } from "react";
import COLORS from "../components/constants/colors";
import { useForm, Controller } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import ServiceInfo from "../components/FormSteps/ServiceInfo";
import PersonalInfo from "../components/FormSteps/PersonalInfo";

import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";


const LoginScreen = ({navigation}) => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const {
      control,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
    const onLogin = (data) => {
      navigation.navigate("Dashboard");
    };
  
  return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    
            {/* Header */}
            <View style={styles.headerSection}>
              {/* Back Button */}
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={moderateScale(24)} color="#1E293B" />
              </TouchableOpacity>
    
              {/* Left Side Text */}
              <View style={styles.textContainer}>
                <Text style={styles.headingText}>
                  Welcome {"\n"}Back
                </Text>
    
                <Text style={styles.subText}>
                  Login to Manage Your {"\n"}
                  bookings and continue{"\n"}
                  earnings.
                </Text>
              </View>
    
              {/* Right Side Image */}
              <Image
                source={require("../assets/images/icon.jpg")}
                style={styles.headerImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <Text style={styles.formHead}>Login Details</Text>

{/* Email / Mobile */}
<Controller
  control={control}
  name="login"
  rules={{
    required: "Email or Mobile Number is required",
  }}
  render={({ field: { onChange, value } }) => (
    <View style={styles.inputContainer}>
      <Ionicons
        name="mail-outline"
        size={moderateScale(22)}
        color={COLORS.darkGray}
      />

      <TextInput
        placeholder="Mobile Number or Email"
        placeholderTextColor={COLORS.lightGray}
        value={value}
        onChangeText={onChange}
        keyboardType="email-address"
        style={styles.input}
      />
    </View>
  )}
/>

{errors.login && (
  <Text style={styles.error}>{errors.login.message}</Text>
)}

<Controller
  control={control}
  name="password"
  rules={{
    required: "Password is required",
  }}
  render={({ field: { onChange, value } }) => (
    <View style={styles.inputContainer}>
      <Ionicons
        name="lock-closed-outline"
        size={moderateScale(22)}
        color={COLORS.darkGray}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={COLORS.lightGray}
        value={value}
        onChangeText={onChange}
        secureTextEntry={!showPassword}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
      >
        <Ionicons
          name={showPassword ? "eye-outline" : "eye-off-outline"}
          size={moderateScale(22)}
          color="#888"
        />
      </TouchableOpacity>
    </View>
  )}
/>

{errors.password && (
  <Text style={styles.error}>{errors.password.message}</Text>
)}

<TouchableOpacity
  style={{ alignSelf: "flex-end", marginTop: verticalScale(0),right:"8%"}}
  onPress={() => navigation.navigate("ForgotPassword")}
>
  <Text
    style={{
      color: COLORS.primary,
      fontWeight: "600",
    }}
  >
    Forgot Password?
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={handleSubmit(onLogin)}
>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
    <View style={styles.bottomSection}>
  <View style={styles.orContainer}>
    <View style={styles.orLine} />
    <Text style={styles.orText}>OR</Text>
    <View style={styles.orLine} />
  </View>

  {/* Google Button */}
  <TouchableOpacity style={styles.googleButton}>
    <Image
      source={require("../assets/images/Google.png")}
      style={styles.googleIcon}
      resizeMode="contain"
    />
    <Text style={styles.googleText}>Sign in with Google</Text>
  </TouchableOpacity>

  {/* Sign Up */}
  <View style={styles.bottomContainer}>
    <Text style={styles.bottomText}>Don't have an account? </Text>

    <TouchableOpacity
      onPress={() => navigation.navigate("Register")}
    >
      <Text style={styles.signInText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
</View>
        </ScrollView>
      
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: verticalScale(30),
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(55),
    paddingBottom: verticalScale(10),
  },

  backButton: {
    position: "absolute",
    top: verticalScale(30),
    left: scale(8),
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  textContainer: {
    flex: 1.2,
    top: verticalScale(10),
    justifyContent: "center",
    paddingRight: scale(10),
  },

  headingText: {
    fontSize: moderateScale(36),
    fontWeight: "900",
    color: "#0F172A",
    lineHeight: moderateScale(38),
    marginBottom: verticalScale(10),
    textShadowColor: "#000000",
  },

  subText: {
    fontSize: moderateScale(15),
    color: "#6B7280",
    lineHeight: moderateScale(21),
    marginTop: verticalScale(4),
  },

  headerImage: {
    flex: 1,
    aspectRatio: 180 / 200,
    maxWidth: scale(180),
    
  },
  formHead: {
  fontSize: moderateScale(20),
  fontWeight: "700",
  color: COLORS.black,
  marginHorizontal: scale(20),
  marginTop: verticalScale(20),
  marginBottom: verticalScale(15),
},

inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: COLORS.white,
  borderWidth: 1,
  borderColor: "#E5E7EB",
  borderRadius: moderateScale(12),
  paddingHorizontal: scale(15),
  height: verticalScale(55),
  marginHorizontal: scale(20),
  marginBottom: verticalScale(15),
},

input: {
  flex: 1,
  fontSize: moderateScale(15),
  color: COLORS.black,
  marginLeft: scale(10),
},

error: {
  color: "#EF4444",
  fontSize: moderateScale(12),
  marginHorizontal: scale(22),
  marginTop: -verticalScale(10),
  marginBottom: verticalScale(10),
},

button: {
  backgroundColor: COLORS.primary,
  marginHorizontal: scale(20),
  height: verticalScale(50),
  borderRadius: moderateScale(12),
  justifyContent: "center",
  alignItems: "center",
  marginTop: verticalScale(20),
},

buttonText: {
  color: "#fff",
  fontSize: moderateScale(20),
  fontWeight: "700",
},

googleButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: verticalScale(55),
  borderRadius: moderateScale(12),
  borderWidth: 1,
  borderColor: "#E5E7EB",
  marginHorizontal: scale(20),
},

googleIcon: {
  width: scale(22),
  height: scale(22),
  marginRight: scale(12),
},

googleText: {
  fontSize: moderateScale(15),
  fontWeight: "600",
  color: COLORS.black,
},
bottomSection: {
  marginTop: verticalScale(30),
  paddingHorizontal: scale(20),
  paddingBottom: verticalScale(30),
},

orContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: verticalScale(25),
},

orLine: {
  flex: 1,
  height: 1,
  backgroundColor: "#E5E7EB",
},

orText: {
  marginHorizontal: scale(12),
  fontSize: moderateScale(14),
  fontWeight: "600",
  color: COLORS.gray,
},

googleButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: "#E5E7EB",
  borderRadius: moderateScale(14),
  height: verticalScale(55),
},

googleIcon: {
  width: scale(22),
  height: scale(22),
  marginRight: scale(12),
},

googleText: {
  fontSize: moderateScale(15),
  fontWeight: "600",
  color: COLORS.black,
},

bottomContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: verticalScale(25),
},

bottomText: {
  fontSize: moderateScale(14),
  color: COLORS.darkGray,
},

signInText: {
  fontSize: moderateScale(14),
  fontWeight: "700",
  color: COLORS.primary,
},
})