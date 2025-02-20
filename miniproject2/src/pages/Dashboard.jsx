import React from "react";
import { useUserContext } from "../context/UserContext";
import Sidebar from "../components/Dashboard/Sidebar";
import GreetingCard from "../components/Dashboard/GreetingCard";
import VenueSearch from "../components/Dashboard/VenueSearch";
import Calendar from "../components/Dashboard/Calendar";

const Dashboard = () => {
  const { currentUser } = useUserContext();

  console.log("Current User:", currentUser); // Debugging Log

  return (
    <div className="Dashboard" style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        {/* Display Greeting */}
        {currentUser?.email ? (
          <GreetingCard userName={currentUser.email} />
        ) : (
          <p>Loading user data...</p>
        )}
        {/* Display Venue Search */}
        <VenueSearch />
        <Calendar/>
      </div>
    </div>
  );
};

export default Dashboard;
