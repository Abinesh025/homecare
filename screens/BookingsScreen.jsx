import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  scale,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";
import COLORS from "../components/constants/colors";

import bookingsData from "../data/bookingsData";
import BookingHeader from "../components/BookingHeader";
import BookingTabs, { TAB_KEYS } from "../components/BookingTabs";
import SearchBar from "../components/SearchBar";
import BookingCard from "../components/BookingCard";
import BottomNavigation from "../components/BottomNavigation";

const SECTION_ORDER = [
  {
    status: "upcoming",
    title: "Upcoming Bookings",
  },
  {
    status: "in_progress",
    title: "In Progress Bookings",
  },
  {
    status: "completed",
    title: "Completed Bookings",
  },
  {
    status: "cancelled",
    title: "Cancelled Bookings",
  },
];

const buildListData = (data, activeTab, query) => {
  const search = query.trim().toLowerCase();

  const filtered = data.filter((booking) => {
    const matchesTab =
      activeTab === TAB_KEYS.ALL ||
      booking.status === activeTab;

    if (!matchesTab) return false;

    if (!search) return true;

    return (
      booking.service.toLowerCase().includes(search) ||
      booking.location.toLowerCase().includes(search)
    );
  });

  const result = [];

  SECTION_ORDER.forEach(({ status, title }) => {
    const items = filtered.filter(
      (booking) => booking.status === status
    );

    if (items.length === 0) return;

    result.push({
      type: "header",
      key: `header-${status}`,
      title,
      count: items.length,
    });

    items.forEach((booking) => {
      result.push({
        type: "item",
        key: booking.id.toString(),
        booking,
      });
    });
  });

  return result;
};

const BookingsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(TAB_KEYS.ALL);
  const [searchQuery, setSearchQuery] = useState("");

  const listData = useMemo(() => {
    return buildListData(
      bookingsData,
      activeTab,
      searchQuery
    );
  }, [activeTab, searchQuery]);

  const handleCardPress = (booking) => {
    console.log("Booking", booking.id);
    navigation.navigate("BookingDetails", { booking});
  };


  const renderItem = ({ item }) => {
    if (item.type === "header") {
      return (
        <Text style={styles.sectionTitle}>
          {item.title} ({item.count})
        </Text>
      );
    }

    return (
      <BookingCard
        booking={item.booking}
        onCardPress={handleCardPress}
        onChat={(booking) =>
          console.log("Chat", booking.customer)
        }
        onViewDetails={handleCardPress}
        onCall={(booking) =>
          console.log("Call", booking.phone)
        }
        onMarkCompleted={(booking) =>
          console.log("Completed", booking.id)
        }
        onViewInvoice={(booking) =>
          console.log("Invoice", booking.id)
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <BookingHeader
        notificationCount={3}
        onNotificationPress={() => {}}
      />

      <BookingTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFilterPress={() => {}}
      />

      <FlatList
        data={listData}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              No bookings found
            </Text>
          </View>
        }
      />

      <BottomNavigation
        activeRoute="Bookings"
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default BookingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  listContent: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
    flexGrow: 1,
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "800",
    color: COLORS.black,
    marginTop: verticalScale(6),
    marginBottom: verticalScale(14),
  },

  emptyState: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(80),
  },

  emptyText: {
    fontSize: moderateScale(15),
    color: COLORS.mediumGray,
    fontWeight: "600",
  },
});