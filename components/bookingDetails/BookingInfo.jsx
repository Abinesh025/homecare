import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  scale,
 verticalScale,
  moderateScale,
} from "react-native-size-matters";

import COLORS from "../constants/colors";

const BookingInfoCard = ({ booking }) => {
  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.item}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color={COLORS.primary}
          />
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{booking.date  }</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Ionicons
            name="time-outline"
            size={20}
            color={COLORS.primary}
          />
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{booking.time}</Text>
          <Text style={styles.subValue}>
            ({booking.duration})
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Ionicons
            name="people-outline"
            size={20}
            color={COLORS.primary}
          />
          <Text style={styles.label}>Cleaners</Text>
          <Text style={styles.value}>
            {booking.cleaners} Cleaners
          </Text>
        </View>
      </View>

      {/* Location */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>

        <View style={styles.row}>
          <View style={styles.iconText}>
            <Ionicons
              name="location-outline"
              size={22}
              color={COLORS.primary}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.value}>
                {booking.locationTitle}
              </Text>

              <Text style={styles.address}>
                {booking.location}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.actionButton}>
            <Feather
              name="map"
              size={22}
              color={COLORS.primary}
            />
            <Text style={styles.actionText}>
              View Map
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Customer */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer</Text>

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <View style={styles.iconText}>
              <Ionicons
                name="person-outline"
                size={20}
                color={COLORS.primary}
              />
              <Text style={styles.value}>
                {booking.customer}
              </Text>
            </View>

            <View style={styles.contactRow}>
              <Ionicons
                name="call-outline"
                size={18}
                color="#666"
              />
              <Text style={styles.contactText}>
                {booking.phone}
              </Text>

              <Text style={styles.contactText}>
                            <Ionicons
                name="mail-outline"
                size={18}
                color="#666666"
              />  {booking.email}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons
              name="call-outline"
              size={22}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Booking ID */}
      <View style={styles.bookingId}>
        <Text style={styles.sectionTitle}>Booking ID</Text>

        <View style={styles.idRow}>
          <Text style={styles.idText}>
            {booking.bookingId}
          </Text>

          <Ionicons
            name="copy-outline"
            size={18}
            color={COLORS.primary}
          />
        </View>
      </View>
    </View>
  );
};

export default BookingInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: "#ECECEC",
    overflow: "hidden",
  },

  topRow: {
    flexDirection: "row",
    paddingVertical: verticalScale(18),
    justifyContent: "space-between",
  },

  item: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },

  divider: {
    width: 1,
    backgroundColor: "#ECECEC",
  },

  label: {
    fontSize: moderateScale(12),
    color: "#777",
  },

  value: {
    fontSize: moderateScale(11),
    fontWeight: "700",
    color: "#222",
  },

  subValue: {
    fontSize: moderateScale(12),
    color: "#777",
  },

  section: {
    borderTopWidth: 1,
    borderColor: "#EFEFEF",
    padding: moderateScale(16),
  },

  sectionTitle: {
    fontSize: moderateScale(13),
    color: "#777",
    marginBottom: 12,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconText: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    gap: 10,
  },

  address: {
    color: "#666",
    marginTop: 3,
    lineHeight: 20,
  },

  actionButton: {
    width: scale(68),
    height: verticalScale(58),
    borderRadius: 12,
    backgroundColor: "#fcfbf5",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: COLORS.primary,
    fontSize: 11,
    marginTop: 4,
    fontWeight: "600",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
    flexWrap: "wrap",
  },

  contactText: {
    color: "#555",
    fontSize: moderateScale(13),
  },

  separator: {
    color: "#AAA",
    marginHorizontal: 4,
  },

  bookingId: {
    borderTopWidth: 1,
    borderColor: "#EFEFEF",
    padding: moderateScale(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  idRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  idText: {
    fontWeight: "700",
    color: "#444",
  },
});