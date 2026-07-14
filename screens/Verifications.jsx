import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../components/constants/colors";

const Verifications = ({ navigation }) => {
  // Steppers state
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Account", "Verification", "Complete"];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={moderateScale(26)} color="#0F172A" />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.headerSection}>
            <View style={styles.leftSection}>
              <Text style={styles.heading}>Verify Your</Text>
              <Text style={styles.mobileHeading}>Mobile Number</Text>

              <Text style={styles.subText}>
                We have sent a 4-digit OTP{"\n"}
                to your mobile number
              </Text>

              {/* Mobile Card */}
              <View style={styles.mobileCard}>
                <View style={styles.mobileRow}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="call" size={moderateScale(22)} color={COLORS.primary} />
                  </View>

                  <View style={styles.mobileInfo}>
                    <Text style={styles.mobileLabel}>Mobile Number</Text>
                    <Text style={styles.mobileValue}>+91 98765 43210</Text>
                  </View>
                </View>

                <View style={styles.divider} />

                <TouchableOpacity style={styles.changeButton}>
                  <Text style={styles.changeText}>Change Number</Text>
                  <Ionicons
                    name="create-outline"
                    size={moderateScale(16)}
                    color={COLORS.primary}
                    style={styles.changeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rightSection}>
              <Image
                source={require("../assets/images/otp.png")}
                style={styles.headerImage}
                resizeMode="contain"
              />
            </View>
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
            
        </View>
        <View style={styles.otpSection}>
        <View style={styles.otpHeader}>
          <Text style={styles.otpTitle}>Enter OTP</Text>
          <Text style={styles.otpSubtitle}>
            Enter the 4-digit  code sent to your number
          </Text>
        </View>

  
          <View style={styles.otpContainer}>
              <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" placeholder="7" placeholderTextColor={COLORS.black}/>
              <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" placeholder="3" placeholderTextColor={COLORS.black}/>
              <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" placeholder="1" placeholderTextColor={COLORS.black}/>
              <TextInput style={styles.otpInput} maxLength={1} keyboardType="number-pad" placeholder="2" placeholderTextColor={COLORS.black}/>
            </View>
        <View style={styles.timerContainer}>
          <Text style={styles.timerLabel}>OTP will expire in </Text>
          <Text style={styles.timerText}>01:45</Text>
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={()=>navigation.navigate("Success")}>
          <Text style={styles.verifyButtonText}>Verify & Continue</Text>
        </TouchableOpacity>

        <View style={styles.resendContainer}>
        <Text style={styles.resendLabel}>Didn't receive the code?</Text>
        <TouchableOpacity>
          <Text style={styles.resendText}> Resend OTP</Text>
        </TouchableOpacity>
        </View>

  <View style={styles.securityContainer}>
      <View style={styles.securityIconContainer}>
        <Ionicons
          name="shield-checkmark"
          size={moderateScale(22)}
          color={COLORS.primary}
        />
      </View>

      <View style={styles.securityTextContainer}>
        <Text style={styles.securityTitle}>
          Your information is safe with us
        </Text>

        <Text style={styles.securitySubtitle}>
          We never share your details with anyone.
        </Text>
      </View>
</View>
</View>
 
      </View>
    </ScrollView>
  );
};

export default Verifications;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(30),
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Caps and centers the content on tablets/large screens so the two-column
  // header doesn't stretch edge-to-edge; on phones this is a no-op.
  content: {
    width: "100%",
    maxWidth: scale(510),
    alignSelf: "center",
  },

  headerSection: {
    flexDirection: "row",
   marginTop:50,
    // Fixed: this was `scale(-180)`, an invalid negative padding that broke
    // this box's height calculation and created the large gap before the
    // stepper below it. Small positive value clears the absolute back button.
    paddingTop: verticalScale(50),
    paddingHorizontal: scale(20),
  },

  leftSection: {
    flex: 1.4,
    paddingRight: scale(12),
  },

  rightSection: {
    flex: 0.8,
    alignItems: "flex-end",
  },

  heading: {
    fontSize: moderateScale(26),
    fontWeight: "900",
    color: "#16213E",
  },

  mobileHeading: {
    fontSize: moderateScale(26),
    fontWeight: "900",
    color: COLORS.primary,
    marginTop: verticalScale(2),
  },

  subText: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(14),
    color: "#6B7280",
    lineHeight: moderateScale(20),
  },

  headerImage: {
    width: scale(190),
    height: scale(300),
    aspectRatio: 1,

    maxWidth: scale(160),
    marginTop: verticalScale(-70),
  },

  mobileCard: {
  marginTop: verticalScale(18),
  width: "78%",
  backgroundColor: "#fff",
  borderRadius: moderateScale(14),
  paddingVertical: verticalScale(14),
  paddingHorizontal: scale(16),

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: moderateScale(8),
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 5,
  },

  mobileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(21),
    backgroundColor: "#FFF9F2",
    justifyContent: "center",
    alignItems: "center",
  },

  mobileInfo: {
    marginLeft: scale(10),
  },

  mobileLabel: {
    fontSize: moderateScale(14),
    color: "#8B8B8B",
    bottom:5,
  },

  mobileValue: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    color: "#222",
  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#EFEFEF",
    marginVertical: verticalScale(5),
  },

  changeButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(4),
  },

  changeText: {
    fontSize: moderateScale(12),
    fontWeight: "700",
    color: COLORS.primary,
  },

  changeIcon: {
    marginLeft: scale(5),
  },

  backButton: {
    position: "absolute",
    top: verticalScale(45),
    left: scale(20),
    zIndex: 10,
  },

  stepContainer: {
    marginTop:20,
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
otpSection: {
  marginTop: verticalScale(15),
  marginHorizontal: scale(20),
  padding: moderateScale(20),

},

otpTitle: {
  fontSize: moderateScale(20),
  fontWeight: "700",
  color: "#16213E",
  
},

otpSubtitle: {
  marginTop: verticalScale(8),
  fontSize: moderateScale(14),
  color: "#6B7280",
  lineHeight: moderateScale(20),
},

otpContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: scale(10),
  marginTop: verticalScale(15),

  shadowColor: COLORS.primary, // Shadow color
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 8,

  elevation: 6, // Android
},

otpInput: {
  width: scale(55),
  height: scale(55),
  borderRadius: moderateScale(12),
  borderWidth: 1.5,
  borderColor: "#E5E7EB",
  backgroundColor: "#FFFFFF",
  textAlign: "center",
  fontSize: moderateScale(22),
  fontWeight: "700",
  color: "#16213E",

  shadowColor: COLORS.primary,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 4,
},

activeOtpInput: {
  borderColor: COLORS.primary,
  backgroundColor: "#FFFFFF",
},

timerContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: verticalScale(20),
},

timerLabel: {
  fontSize: moderateScale(13),
  color: "#6B7280",
},

timerText: {
  fontSize: moderateScale(13),
  fontWeight: "700",
  color: COLORS.primary,
},

resendContainer: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: verticalScale(15),
},

resendLabel: {
  fontSize: moderateScale(13),
  color: "#6B7280",
},

resendText: {
  marginLeft: scale(5),
  fontSize: moderateScale(14),
  fontWeight: "700",
  color: COLORS.primary,
},

verifyButton: {
  marginTop: verticalScale(20),
  height: verticalScale(50),
  borderRadius: moderateScale(12),
  backgroundColor: COLORS.primary,
  justifyContent: "center",
  alignItems: "center",
},

verifyButtonText: {
  color: "#FFFFFF",
  fontSize: moderateScale(16),
  fontWeight: "700",
},

helpText: {
  marginTop: verticalScale(18),
  textAlign: "center",
  fontSize: moderateScale(13),
  color: "#6B7280",
},
securityContainer: {
  marginTop: verticalScale(20),
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderWidth: 1,
  borderColor: "#E8F5E9",
  borderRadius: moderateScale(14),
  paddingVertical: verticalScale(14),
  paddingHorizontal: scale(14),

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.05,
  shadowRadius: 8,
  elevation: 3,
},

securityIconContainer: {
  width: scale(46),
  height: scale(46),
  borderRadius: scale(23),
  backgroundColor: "#f8f2ea",
  justifyContent: "center",
  alignItems: "center",
},

securityTextContainer: {
  flex: 1,
  marginLeft: scale(12),
},

securityTitle: {
  fontSize: moderateScale(15),
  fontWeight: "700",
  color: "#1F2937",
},

securitySubtitle: {
  marginTop: verticalScale(3),
  fontSize: moderateScale(12),
  color: "#6B7280",
  lineHeight: moderateScale(18),
},
});
