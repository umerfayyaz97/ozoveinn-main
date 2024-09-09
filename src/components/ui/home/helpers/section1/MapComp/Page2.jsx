"use client";
import React, { useState } from "react";
import useStore from "@/lib/store";
import { ArrowLeftIcon, Minus, Plus } from "lucide-react";

const Page2 = ({ setComponent }) => {
  const setOccasion = useStore((state) => state.setOccasion);
  const setPassengers = useStore((state) => state.setPassengers);
  const setContact = useStore((state) => state.setContact);
  const setDriverNote = useStore((state) => state.setDriverNote);
  // const setPaymentDetails = useStore((state) => state.setPaymentDetails);

  const occasion = useStore((state) => state.occasion);
  const passengers = useStore((state) => state.passengers);
  const contact = useStore((state) => state.contact);
  const driverNote = useStore((state) => state.driverNote);
  // const paymentDetails = useStore((state) => state.paymentDetails);
  const totalPrice = useStore((state) => state.totalPrice);

  const [showOccasions, setShowOccasions] = useState(false);
  const [error, setError] = useState("");

  const handleContactChange = (field, value) => {
    setContact({ ...contact, [field]: value });
  };

  const incrementPassengers = () => {
    setPassengers(passengers + 1);
  };

  const decrementPassengers = () => {
    if (passengers > 0) {
      setPassengers(passengers - 1);
    }
  };

  const handlePassengersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPassengers(isNaN(value) ? 0 : Math.max(0, value));
  };

  const handleNextComponent = () => {
    if (
      !occasion ||
      passengers === 0 ||
      !contact.name ||
      !contact.phone ||
      !contact.email
    ) {
      setError("Please fill in all required fields.");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
      setComponent(3);
    }
  };

  return (
    <div className="lg:p-0 p-3">
      <div className="w-full p-4 lg:h-[305px] lg:overflow-auto text-black bg-white shadow-lg rounded-lg border border-gray-300 lg:border-none">
        <button onClick={() => setComponent(1)} className="mb-4 text-gray-700">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="mb-4 text-2xl font-bold text-gray-700">
          Booking Details
        </h1>

        <h2 className="mb-2 text-xl font-semibold text-gray-700">
          Select Occasion
        </h2>
        <div className="relative mb-4">
          <button
            className="w-full p-2 text-center bg-gray-200 rounded"
            onClick={() => setShowOccasions(!showOccasions)}
          >
            {occasion ? occasion : "Select Occasion"}
          </button>
          {showOccasions && (
            <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
              <select
                value={occasion}
                onChange={(e) => {
                  setOccasion(e.target.value);
                  setShowOccasions(false);
                }}
                className="w-full p-2"
                size="7"
              >
                <option value="">Select Occasion</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Wedding">Wedding</option>
                <option value="Party">Party</option>
                <option value="Business">Business</option>
                <option value="Vacation">Vacation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-700">
          Specify Number of Passengers
        </h2>
        <p className="mb-2 text-sm">
          Kindly specify number of people travelling
        </p>
        <div className="flex items-center mb-4 space-x-4">
          <button
            onClick={decrementPassengers}
            className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-white rounded-full"
          >
            <Minus />
          </button>
          <input
            type="number"
            value={passengers}
            onChange={handlePassengersChange}
            className="w-20 p-2 text-center rounded"
          />
          <button
            onClick={incrementPassengers}
            className="flex items-center justify-center w-10 h-10 text-black border-2 border-yellow-500 bg-yellow-500 rounded-full"
          >
            <Plus />
          </button>
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-700">
          Contact Details
        </h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => handleContactChange("name", e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded"
          />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-700">
          Note to Driver
        </h2>
        <textarea
          value={driverNote}
          onChange={(e) => setDriverNote(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div className="">
        {error && <div className=" text-red-500 text-sm">{error}</div>}
        <button className="p-2 mt-4 lg:mt-0 px-4 font-bold rounded-md text-black  bg-yellow-500/20 w-full">
          Total Price: ${totalPrice.toFixed(2)}
        </button>
        <button
          onClick={handleNextComponent}
          className="w-full bg-yellow-500 text-black p-2 rounded-md font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page2;
