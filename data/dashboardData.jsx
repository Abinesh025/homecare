import avatar from "../assets/images/avatar.png";

const dashboardData = {
  user: {
    name: "Ramesh Kumar",
    profile:avatar,
    notifications: 3,
    online: true,
  },

  earnings: {
    total: "₹7,460",
    jobsCompleted: 18,
    hoursWorked: 12.5,
    period: "This Week",
  },

  todayOverview: [
    {
      id: 1,
      title: "Total Bookings",
      value: 3,
      icon: "calendar-outline",
      color: "#22C55E",
      background: "#ECFDF5",
    },
    {
      id: 2,
      title: "Upcoming",
      value: 2,
      icon: "time-outline",
      color: "#3B82F6",
      background: "#EFF6FF",
    },
    {
      id: 3,
      title: "In Progress",
      value: 1,
      icon: "play-circle-outline",
      color: "#F59E0B",
      background: "#FFF7ED",
    },
    {
      id: 4,
      title: "Completed",
      value: 2,
      icon: "checkmark-circle",
      color: "#8B5CF6",
      background: "#F5F3FF",
    },
  ],

  upcomingBooking: {
    time: "10:00 AM",
    service: "Deep Cleaning",
    duration: "2 Hours",
    cleaners: "2 Cleaners",
    location: "Koramangala, Bangalore",
    status: "Upcoming",
    amount: "₹2,180",
    icon:"broom"
  },

  recentBookings: [
    {
      id: 1,
      service: "Sofa Cleaning",
      date: "24 May, 12:05 PM",
      location: "HSR Layout, Bangalore",
      status: "Completed",
      amount: "₹1,299",
    },
    {
      id: 2,
      service: "Bathroom Cleaning",
      date: "23 May, 06:20 PM",
      location: "Indiranagar, Bangalore",
      status: "Completed",
      amount: "₹749",
    },
  ],
};

export default dashboardData;