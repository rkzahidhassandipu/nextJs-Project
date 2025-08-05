"use client";
import MyBookingTable from "@/components/myBookingTable/MyBookingTable";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMyBooking = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/service", {
          cache: "no-store",
        });
        const d = await res.json();
        setData(d);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchMyBooking();
  }, []);

  // Function to remove deleted item from state
  const handleDeleteLocal = (id) => {
    setData((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div>
      <MyBookingTable data={data} onDelete={handleDeleteLocal} />
    </div>
  );
};

export default Page;
