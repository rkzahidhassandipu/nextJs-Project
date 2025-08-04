'use client'
import MyBookingTable from '@/components/myBookingTable/MyBookingTable';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMyBooking = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/service');
        const d = await res.json();
        setData(d);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchMyBooking(); // ✅ CALL THE FUNCTION
  }, []);

  return (
    <div>
      <MyBookingTable data={data} />
    </div>
  );
};

export default Page;
