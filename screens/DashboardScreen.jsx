import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

import COLORS from "../components/constants/colors";
import dashboardData from "../data/dashboardData";

import Header from "../components/dashboard/Header";
import OnlineStatusCard from "../components/dashboard/OnlineStatusCard";
import EarningsCard from "../components/dashboard/EarningsCard";
import TodayOverview from "../components/dashboard/TodayOverview";
import UpcomingBookingCard from "../components/dashboard/UpcomingBookingCard";
import RecentBookingCard from "../components/dashboard/RecentBookingCard";
import MotivationCard from "../components/dashboard/MotivationCard";
import BottomNavigation from "../components/BottomNavigation";
const DashboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Header user={dashboardData.user} />

        <OnlineStatusCard online={dashboardData.user.online} />

        <EarningsCard earnings={dashboardData.earnings} />

        <TodayOverview data={dashboardData.todayOverview} />

        <UpcomingBookingCard booking={dashboardData.upcomingBooking} />

        <RecentBookingCard bookings={dashboardData.recentBookings} />

        <MotivationCard />
      </ScrollView>
      <BottomNavigation
  activeRoute="Dashboard"
  navigation={navigation}
/>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScale(30),
  },
});