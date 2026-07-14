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
import tick from "../assets/images/tick.png"
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../components/constants/colors";

const Success = ({navigation}) => {

      // Steppers state
      const [currentStep, setCurrentStep] = useState(2);
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
                        <Text style={styles.heading}>You're All Set!</Text>
                        <Text style={styles.mobileHeading}>Welcome to HomeCare</Text>

                        <Text style={styles.subText}>
                            Your account has been created
                            successfully. Complete your{"\n"}
                            profile and start receiving{"\n"}
                            bookings.
                        </Text>

                
                        </View>

                        <View style={styles.rightSection}>
                        <Image
                            source={require("../assets/images/success.png")}
                            style={styles.headerImage}
                            resizeMode="contain"
                        />
                        </View>
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

                              <View style={styles.successSection}>
                    
          <Image
            source={tick}
            style={styles.image}
          />                    

                <Text style={styles.successTitle}>
                    Registration Completed!
                </Text>

                <Text style={styles.successSubtitle}>
                    Your provider account is ready to use.
                </Text>
            </View>
            <View style={styles.detailsCard}>
                <Text style={styles.cardTitle}>Your Account Details</Text>

            {/* Name */}
            <View style={styles.detailRow}>
                <View style={styles.detailIcon}>
                <Ionicons name="person" size={18} color={COLORS.primary} />
                </View>

                <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Name</Text>
                <Text style={styles.detailValue}>Ramesh Kumar</Text>
                </View>
            </View>

            <View style={styles.rowDivider} />

            {/* Mobile */}
            <View style={styles.detailRow}>
                <View style={styles.detailIcon}>
                <Ionicons name="call" size={18} color={COLORS.primary} />
                </View>

                <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Mobile Number</Text>
                <Text style={styles.detailValue}>+91 98765 43210</Text>
                </View>
            </View>

            <View style={styles.rowDivider} />

            {/* Email */}
            <View style={styles.detailRow}>
                <View style={styles.detailIcon}>
                <Ionicons name="mail" size={18} color={COLORS.primary} />
                </View>

                <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Email Address</Text>
                <Text style={styles.detailValue}>ramesh@gmail.com</Text>
                </View>
            </View>

            <View style={styles.rowDivider} />

            {/* Service */}
            <View style={styles.detailRow}>
                <View style={styles.detailIcon}>
                <Ionicons name="briefcase" size={18} color={COLORS.primary} />
                </View>

                <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Primary Service</Text>
                <Text style={styles.detailValue}>Deep Cleaning</Text>
                </View>
            </View>

            <View style={styles.rowDivider} />

                    {/* Location */}
                    <View style={styles.detailRow}>
                        <View style={styles.detailIcon}>
                        <Ionicons name="location" size={18} color={COLORS.primary} />
                        </View>

                        <View style={styles.detailContent}>
                        <Text style={styles.detailLabel}>Service Location</Text>
                        <Text style={styles.detailValue}>Bangalore, Karnataka</Text>
                        </View>
                    </View>
            </View>
            
            
            <View style={styles.statusCard}>
  <View style={styles.statusIcon}>
    <Ionicons
      name="shield-checkmark"
      size={35}
      color={COLORS.primary}
    />
  </View>

  <View style={{ flex: 1 }}>
    <Text style={styles.statusTitle}>
      Verification Pending
    </Text>

    <Text style={styles.statusSubtitle}>
      We're reviewing your documents. You'll be notified once approved. You can start exploring the app meanwhile.
    </Text>
  </View>
</View>

<TouchableOpacity
  style={styles.continueButton}
  onPress={() => navigation.navigate("Dashboard")}
>
  <Text style={styles.continueText}>
    Go to Dashboard
  </Text>
</TouchableOpacity>
           
        

        </View>
        </ScrollView>
  )
}

export default Success

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
    fontSize: moderateScale(21),
    fontWeight: "900",
    color: COLORS.primary,
    marginTop: verticalScale(2),
  },

  subText: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(14),
    color: "#6B7280",
    lineHeight: moderateScale(22),
    
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
    top: verticalScale(-25),
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
  successSection: {
  alignItems: "center",
  marginTop: verticalScale(10),
  marginHorizontal: scale(20),
},

successIcon: {
  width: scale(90),
  height: scale(90),
  borderRadius: scale(45),
  backgroundColor: "#fdf7ec",
  justifyContent: "center",
  alignItems: "center",
},

successTitle: {
  marginTop: verticalScale(18),
  fontSize: moderateScale(24),
  fontWeight: "900",
  color: "#1E293B",
},

successSubtitle: {
  marginTop: verticalScale(8),
  fontSize: moderateScale(14),
  color: "#6B7280",
  textAlign: "center",
  lineHeight: moderateScale(22),
},
detailsCard: {
  marginTop: verticalScale(25),
  marginHorizontal: scale(20),
  backgroundColor: "#FFFFFF",
  borderRadius: moderateScale(16),
  paddingVertical: verticalScale(18),

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.06,
  shadowRadius: 8,
  elevation: 4,
},

cardTitle: {
  fontSize: moderateScale(17),
  fontWeight: "700",
  color: "#1E293B",
  marginHorizontal: scale(18),
  marginBottom: verticalScale(12),
},
detailRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: scale(18),
  paddingVertical: verticalScale(14),

},

detailIcon: {
  width: scale(36),
  height: scale(36),
  borderRadius: scale(18),
  backgroundColor: "#fdf8ec",
  justifyContent: "center",
  alignItems: "center",
  marginRight: scale(10),
},

detailContent: {
 
  flex: 1,
},

detailLabel: {
  fontSize: moderateScale(12),
  color: "#94A3B8",
  marginBottom: verticalScale(2),
},

detailValue: {
  fontSize: moderateScale(15),
  fontWeight: "700",
  color: "#1E293B",
},
statusCard: {
  marginTop: verticalScale(25),
  marginHorizontal: scale(20),
  padding: moderateScale(16),
  flexDirection: "row",
  alignItems: "flex-start",
  backgroundColor: "#fdf9f4",
  borderRadius: moderateScale(16),
  borderWidth: 1,
  borderColor: "#efdcbf",
},

statusIcon: {
  width: scale(50),
  height: scale(50),
  borderRadius: scale(21),
  backgroundColor: "#fdf8ec",
  justifyContent: "center",
  alignItems: "center",
  marginRight: scale(12),
},

statusTitle: {
  fontSize: moderateScale(15),
  fontWeight: "700",
  color: "#1E293B",
},

statusSubtitle: {
  marginTop: verticalScale(4),
  fontSize: moderateScale(11),
  color: "#6B7280",
  lineHeight: moderateScale(20),
},
continueButton: {
  marginTop: verticalScale(30),
  marginHorizontal: scale(20),
  height: verticalScale(52),
  borderRadius: moderateScale(14),
  backgroundColor: COLORS.primary,
  justifyContent: "center",
  alignItems: "center",
},

continueText: {
  color: "#FFFFFF",
  fontSize: moderateScale(16),
  fontWeight: "700",
},
rowDivider: {
  height: StyleSheet.hairlineWidth,
  backgroundColor: "#E5E7EB",
  marginHorizontal: scale(18),
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
  backgroundColor: "#ae6f22",
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

  image: {
    width: scale(150),
    height: scale(150),
    marginTop:scale(-30),
    marginRight: moderateScale(14),
  },
})