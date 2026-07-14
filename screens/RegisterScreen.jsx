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

const RegisterScreen = ({ navigation }) => {
  // Steppers state
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Account", "Verification", "Complete"];
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Dummy Services
  const serviceData = [
    { label: "Electrician", value: "Electrician" },
    { label: "Plumber", value: "Plumber" },
    { label: "Carpenter", value: "Carpenter" },
    { label: "Painter", value: "Painter" },
    { label: "AC Repair", value: "AC Repair" },
    { label: "Home Cleaning", value: "Home Cleaning" },
  ];

  const Cities = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Tirunelveli",
    "Erode",
    "Vellore",
    "Thoothukudi",
    "Thanjavur",
    "Dindigul",
    "Karur",
    "Namakkal",
    "Nagapattinam",
    "Mayiladuthurai",
    "Kumbakonam",
    "Cuddalore",
    "Villupuram",
    "Kanchipuram",
    "Tiruppur",
    "Hosur",
    "Sivakasi",
    "Nagercoil",
    "Ramanathapuram",
    "Pudukkottai",
  ];

  const city = Cities.map((city) => ({
    label: city,
    value: city,
  }));

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

        {/* Steppers */}
        <View style={styles.stepContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <View style={styles.stepWrapper}>
                <View
                  style={[
                    styles.circle,
                    index <= currentStep && styles.activeCircle,
                  ]}
                >
                  <Text
                    style={[
                      styles.number,
                      index <= currentStep && styles.activeText,
                    ]}
                  >
                    {index + 1}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.label,
                    index <= currentStep && styles.activeLabel,
                  ]}
                >
                  {step}
                </Text>
              </View>

              {index !== steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    index < currentStep && styles.activeLine,
                  ]}
                />
              )}
            </React.Fragment>
          ))}
        </View>

        {/* Remaining Screen */}
        <View style={styles.body}>
          {/* Form */}
          <View style={styles.formContainer}>
            <Text style={styles.formHead}>Personal Information</Text>

            {/* Full Name */}
            <Controller
              control={control}
              name="fullName"
              rules={{ required: "Full Name is required" }}
              render={({ field: { onChange, value } }) => (
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="person-outline"
                    size={moderateScale(22)}
                    style={{ fontWeight: "bold" }}
                    color={COLORS.darkGray}
                  />

                  <TextInput
                    placeholder="Full Name"
                    value={value}
                    placeholderTextColor={COLORS.lightGray}
                    onChangeText={onChange}
                    style={styles.input}
                  />
                </View>
              )}
            />
            {errors.fullName && (
              <Text style={styles.error}>{errors.fullName.message}</Text>
            )}

            {/* Mobile */}
            <Controller
              control={control}
              name="mobile"
              rules={{
                required: "Mobile Number is required",
                minLength: {
                  value: 10,
                  message: "Enter a valid mobile number",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="call-outline"
                    size={moderateScale(22)}
                    color={COLORS.darkGray}
                  />

                  <TextInput
                    placeholder="Mobile Number"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor={COLORS.lightGray}
                    keyboardType="phone-pad"
                    style={styles.input}
                  />
                </View>
              )}
            />
            {errors.mobile && (
              <Text style={styles.error}>{errors.mobile.message}</Text>
            )}

            {/* Email */}
            <Controller
              control={control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid Email",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="mail-outline"
                    size={moderateScale(22)}
                    color={COLORS.darkGray}
                  />

                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor={COLORS.lightGray}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    style={styles.input}
                  />
                </View>
              )}
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}

            {/* Password */}
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
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

                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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

            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              }}
              render={({ field: { onChange, value } }) => (
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={moderateScale(22)}
                    color={COLORS.darkGray}
                  />

                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={COLORS.lightGray}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={!showConfirmPassword}
                    style={styles.input}
                  />

                  <TouchableOpacity
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Ionicons
                      name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                      size={moderateScale(22)}
                      color="#888"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}

            <Text style={styles.formHead}>Service Information</Text>

            <Controller
              control={control}
              name="service"
              rules={{
                required: "Please select a Service",
              }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={serviceData}
                  maxHeight={verticalScale(300)}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Primary Service"
                  searchPlaceholderTextColor={COLORS.lightGray}
                  value={value}
                  onChange={(item) => onChange(item.value)}
                  renderLeftIcon={() => (
                    <Ionicons
                      name="briefcase-outline"
                      size={moderateScale(22)}
                      color={COLORS.darkGray}
                      style={{ marginRight: scale(10) }}
                    />
                  )}
                />
              )}
            />
            {errors.service && (
              <Text style={styles.error}>{errors.service.message}</Text>
            )}

            <Controller
              control={control}
              name="city"
              rules={{
                required: "Please select your city",
              }}
              render={({ field: { onChange, value } }) => (
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  iconStyle={styles.iconStyle}
                  data={city}
                  labelField="label"
                  valueField="value"
                  placeholder="Select City"
                  searchPlaceholderTextColor={COLORS.lightGray}
                  value={value}
                  onChange={(item) => onChange(item.value)}
                  renderLeftIcon={() => (
                    <Ionicons
                      name="location-outline"
                      size={moderateScale(22)}
                      color={COLORS.darkGray}
                      style={{ marginRight: scale(10) }}
                    />
                  )}
                />
              )}
            />
            {errors.city && (
              <Text style={styles.error}>{errors.city.message}</Text>
            )}

            <Controller
              control={control}
              name="referralCode"
              rules={{
                pattern: {
                  value: /^[A-Za-z0-9]{6,12}$/,
                  message: "Invalid referral code",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="gift-outline"
                    size={moderateScale(22)}
                    color={COLORS.darkGray}
                  />

                  <TextInput
                    placeholder="Referral Code (Optional)"
                    placeholderTextColor={COLORS.lightGray}
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                  />
                </View>
              )}
            />
            {errors.referralCode && (
              <Text style={styles.error}>{errors.referralCode.message}</Text>
            )}

            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setAccepted(!accepted)}>
                <Ionicons
                  name={accepted ? "checkbox" : "square-outline"}
                  size={moderateScale(24)}
                  color={COLORS.primary}
                />
              </TouchableOpacity>

              <Text style={styles.checkboxText}>
                I agree to the{" "}
                <Text style={{ color: COLORS.primary }}>Terms & Conditions</Text>{" "}
                and{" "}
                <Text style={{ color: COLORS.primary }}>Privacy Policy</Text>
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Verification")}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cont}>
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

              <Text style={styles.googleText}>Sign up with Google</Text>
            </TouchableOpacity>

            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Already have an account? </Text>

              <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

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
    top: verticalScale(40),
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
    fontSize: moderateScale(26),
    fontWeight: "900",
    color: "#0F172A",
    lineHeight: moderateScale(31),
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
    aspectRatio: 180 / 230,
    maxWidth: scale(150),
  },

  stepContainer: {
    marginTop: verticalScale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: scale(10),
  },

  stepWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  circle: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(16),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray,
    borderWidth: moderateScale(2),
    borderColor: COLORS.gray,
  },

  activeCircle: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  number: {
    color: "#646668",
    fontWeight: "700",
    fontSize: moderateScale(12),
  },

  activeText: {
    color: "#fff",
  },

  label: {
    marginLeft: scale(8),
    fontSize: moderateScale(13),
    fontWeight: "700",
    color: "#6B7280",
  },

  activeLabel: {
    color: COLORS.primary,
  },

  line: {
    width: scale(30),
    height: moderateScale(2),
    backgroundColor: COLORS.gray,
    marginHorizontal: scale(8),
  },

  activeLine: {
    backgroundColor: COLORS.primary,
  },

  button: {
    marginTop: verticalScale(18),
    padding: moderateScale(12),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(8),
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: moderateScale(16),
    fontWeight: "900",
  },

  formContainer: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(20),
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(15),
    height: verticalScale(50),
    marginBottom: verticalScale(15),
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    marginLeft: scale(10),
    fontSize: moderateScale(15),
    color: COLORS.black,
  },

  error: {
    color: "red",
    fontSize: moderateScale(12),
    marginBottom: verticalScale(10),
  },

  formHead: {
    fontSize: moderateScale(18),
    fontWeight: "900",
    marginBottom: verticalScale(15),
    marginTop: verticalScale(7),
  },

  dropdown: {
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: moderateScale(12),
    paddingHorizontal: scale(15),
    backgroundColor: "#fff",
    marginBottom: verticalScale(15),
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    marginBottom: verticalScale(15),
  },

  inputText: {
    flex: 1,
    marginLeft: scale(10),
    fontSize: moderateScale(15),
    color: "#000",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(15),
  },

  checkboxText: {
    marginLeft: scale(10),
    fontSize: moderateScale(13),
    flex: 1,
  },

  placeholderStyle: {
    fontSize: moderateScale(15),
    color: "#9CA3AF",
  },

  selectedTextStyle: {
    fontSize: moderateScale(15),
    color: "#111827",
  },

  iconStyle: {
    width: scale(20),
    height: scale(20),
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: verticalScale(20),
  },

  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  orText: {
    marginHorizontal: scale(15),
    color: "#9CA3AF",
    fontWeight: "600",
    fontSize: moderateScale(13),
  },

  googleButton: {
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: moderateScale(14),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  googleText: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: "#1F2937",
  },

  bottomContainer: {
    marginTop: verticalScale(20),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomText: {
    fontSize: moderateScale(13),
    color: "#4B5563",
  },

  signInText: {
    fontSize: moderateScale(13),
    fontWeight: "700",
    color: COLORS.primary,
  },

  cont: {
    paddingHorizontal: scale(20),
    marginTop: verticalScale(10),
  },

  googleIcon: {
    width: scale(22),
    aspectRatio: 1,
    marginRight: scale(12),
  },

  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});