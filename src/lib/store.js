// import { devtools } from "zustand/middleware";
// import { create } from "zustand";

// const useStore = create(
//   devtools((set) => ({
//     date: "",
//     pickup: null,
//     stop: null,
//     time: "",
//     destination: null,
//     vehicleType: "",
//     vehicleDetails: {},
//     note: "",
//     driverNote: "",
//     occasion: "",
//     passengers: 0,
//     contact: { name: "", phone: "", email: "" },
//     distanceStartToEnd: 0,
//     distanceStartToStop: 0,
//     distanceStopToEnd: 0,
//     additionalOptions: [],
//     totalPrice: 0,
//     hourlyBookingCount: 1,
//     additionalVehicleCount: 1,
//     orderNumber: "",
//     options: [
//       { name: "Hourly Bookings", price: "$10" },
//       { name: "Add More Vehicles", price: "$15" },
//       { name: "Return Trip", price: "$20" },
//       { name: "Party Van", price: "$25" },
//       { name: "Luggage Trailer", price: "$30" },
//       { name: "Child Seat", price: "$35" },
//       { name: "Disability Seat Driver", price: "$35" },
//     ],
//     vehicles: {
//       smallVan: {
//         name: "Small Van",
//         image: "/vehicles/Vito1.png",
//         passengerLimit: "8 Seater",
//         averageCostPerPerson: "$15",
//         minimumPassengers: 4,
//         cardDetails: "Mercedes-Benz V-Class or Similar",
//         baseFare: 40,
//         hourlyRate: 60,
//       },
//       largeVan: {
//         name: "Large Van",
//         image: "/vehicles/2.png",
//         passengerLimit: "10 Seater",
//         averageCostPerPerson: "$20",
//         minimumPassengers: 2,
//         cardDetails: "Toyota Hi- Ace or Similar",
//         baseFare: 50,
//         hourlyRate: 100,
//       },
//       bus: {
//         name: "Bus",
//         image: "/vehicles/coaster.png",
//         passengerLimit: "30 Seater",
//         averageCostPerPerson: "$10",
//         minimumPassengers: 3,
//         cardDetails: "Toyota Coaster or Similar",
//         baseFare: 150,
//         hourlyRate: 150,
//       },
//     },
//     setDate: (date) =>
//       set((state) => {
//         // console.log("Date updated:", date);
//         return { ...state, date };
//       }),
//     setTime: (time) =>
//       set((state) => {
//         // console.log("Time updated:", time);
//         return { ...state, time };
//       }),
//     setPickup: (pickup) =>
//       set((state) => {
//         // console.log("Pickup updated:", pickup);
//         return { ...state, pickup };
//       }),
//     setStop: (stop) =>
//       set((state) => {
//         // console.log("Stop updated:", stop);
//         return { ...state, stop };
//       }),
//     setDestination: (destination) =>
//       set((state) => {
//         // console.log("Destination updated:", destination);
//         return { ...state, destination };
//       }),
//     setVehicleType: (vehicleType) =>
//       set((state) => {
//         // console.log("VehicleType updated:", vehicleType);
//         return { ...state, vehicleType };
//       }),
//     setVehicleDetails: (vehicleDetails) =>
//       set((state) => {
//         // console.log("VehicleDetails updated:", vehicleDetails);
//         return { ...state, vehicleDetails };
//       }),
//     setOccasion: (occasion) =>
//       set((state) => {
//         // console.log("Occasion updated:", occasion);
//         return { ...state, occasion };
//       }),
//     setPassengers: (passengers) =>
//       set((state) => {
//         // console.log("Passengers updated:", passengers);
//         return { ...state, passengers };
//       }),
//     setContact: (contact) =>
//       set((state) => {
//         // console.log("Contact updated:", contact);
//         return { ...state, contact };
//       }),
//     setNote: (note) =>
//       set((state) => {
//         // console.log("Note updated:", note);
//         return { ...state, note };
//       }),
//     setDriverNote: (driverNote) =>
//       set((state) => {
//         // console.log("DriverNote updated:", driverNote);
//         return { ...state, driverNote };
//       }),
//     setDistanceStartToEnd: (distanceStartToEnd) =>
//       set((state) => {
//         // console.log("DistanceStartToEnd updated:", distanceStartToEnd);
//         return { ...state, distanceStartToEnd };
//       }),
//     setDistanceStartToStop: (distanceStartToStop) =>
//       set((state) => {
//         // console.log("DistanceStartToStop updated:", distanceStartToStop);
//         return { ...state, distanceStartToStop };
//       }),
//     setDistanceStopToEnd: (distanceStopToEnd) =>
//       set((state) => {
//         // console.log("DistanceStopToEnd updated:", distanceStopToEnd);
//         return { ...state, distanceStopToEnd };
//       }),
//     setAdditionalOptions: (additionalOptions) =>
//       set((state) => {
//         // console.log("AdditionalOptions updated:", additionalOptions);
//         return { ...state, additionalOptions };
//       }),
//     setHourlyBookingCount: (hourlyBookingCount) =>
//       set((state) => {
//         // console.log("HourlyBookingCount updated:", hourlyBookingCount);
//         return { ...state, hourlyBookingCount };
//       }),
//     setAdditionalVehicleCount: (additionalVehicleCount) =>
//       set((state) => {
//         // console.log("AdditionalVehicleCount updated:", additionalVehicleCount);
//         return { ...state, additionalVehicleCount };
//       }),
//     calculateTotalPrice: () =>
//       set((state) => {
//         const distance =
//           state.distanceStartToEnd +
//           state.distanceStartToStop +
//           state.distanceStopToEnd;
//         const vehicleBaseFare = state.vehicleDetails?.baseFare || 0;
//         const hourlyRate = state.vehicleDetails?.hourlyRate || 0;

//         const additionalOptionsCost = state.additionalOptions.reduce(
//           (acc, option) => {
//             const optionDetails = state.options.find(
//               (opt) => opt.name === option
//             );
//             const optionPrice = optionDetails?.price.replace("$", "") || 0;

//             if (option === "Hourly Bookings") {
//               return acc + hourlyRate * state.hourlyBookingCount;
//             } else if (option === "Add More Vehicles") {
//               return (
//                 acc + parseFloat(optionPrice) * state.additionalVehicleCount
//               );
//             } else {
//               return acc + parseFloat(optionPrice);
//             }
//           },
//           0
//         );
//         const totalPrice =
//           vehicleBaseFare + distance * 2 + additionalOptionsCost; // Distance charge is 2 per km
//         // console.log("Total Price calculated:", totalPrice);
//         return { ...state, totalPrice };
//       }),
//     setDistances: (distances) =>
//       set((state) => {
//         // console.log("Distances updated:", distances);
//         return { ...state, ...distances };
//       }),
//     setOrderNumber: (orderNumber) => {
//       // console.log("Order Number set to:", orderNumber); // Log the order number
//       set({ orderNumber });
//     },
//   }))
// );

// export default useStore;

import { devtools } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  devtools((set) => ({
    date: "",
    pickup: null,
    stop: null,
    time: "",
    destination: null,
    vehicleType: "",
    vehicleDetails: {},
    note: "",
    driverNote: "",
    occasion: "",
    passengers: 0,
    contact: { name: "", phone: "", email: "" },
    distanceStartToEnd: 0,
    distanceStartToStop: 0,
    distanceStopToEnd: 0,
    additionalOptions: [],
    totalPrice: 0,
    hourlyBookingCount: 3,
    additionalVehicleCount: 1,
    splitPaymentDetails: { passengers: 0 }, // New state for split payment details
    passengers: 0, // Number of passengers state
    setPassengers: (passengers) => set({ passengers }), // Set number of passengers
    setSplitPaymentDetails: (details) => set({ splitPaymentDetails: details }), // Set split payment details
    additionalOptions: [], // Additional services selected
    setAdditionalOptions: (options) => set({ additionalOptions: options }),
    orderNumber: "",
    options: [
      { name: "Hourly Bookings", price: "$10" },
      { name: "Add More Vehicles", price: "$15" },
      { name: "Return Trip", price: "$20" },
      { name: "Party Van", price: "$25" },
      { name: "Luggage Trailer", price: "$30" },
      { name: "Child Seat", price: "$35" },
      { name: "Disability Seat Driver", price: "$35" },
    ],
    vehicles: {
      smallVan: {
        name: "Bus",
        image: "/vehicles/Vito1.png",
        passengerLimit: "8 Seater",
        averageCostPerPerson: "$15",
        minimumPassengers: 4,
        cardDetails: "Mercedes-Benz V-Class or Similar",
        baseFare: 40,
        hourlyRate: 60,
      },
      largeVan: {
        name: "Mini Bus",
        image: "/vehicles/2.png",
        passengerLimit: "10 Seater",
        averageCostPerPerson: "$20",
        minimumPassengers: 2,
        cardDetails: "Toyota Hi- Ace or Similar",
        baseFare: 50,
        hourlyRate: 100,
      },
      bus: {
        name: "Bus",
        image: "/vehicles/coaster.png",
        passengerLimit: "30 Seater",
        averageCostPerPerson: "$10",
        minimumPassengers: 3,
        cardDetails: "Toyota Coaster or Similar",
        baseFare: 150,
        hourlyRate: 150,
      },
    },
    setDate: (date) => set((state) => ({ ...state, date })),
    setTime: (time) => set((state) => ({ ...state, time })),
    setPickup: (pickup) => set((state) => ({ ...state, pickup })),
    setStop: (stop) => set((state) => ({ ...state, stop })),
    setDestination: (destination) =>
      set((state) => ({ ...state, destination })),
    setVehicleType: (vehicleType) =>
      set((state) => ({ ...state, vehicleType })),
    setVehicleDetails: (vehicleDetails) =>
      set((state) => ({ ...state, vehicleDetails })),
    setOccasion: (occasion) => set((state) => ({ ...state, occasion })),
    setPassengers: (passengers) => set((state) => ({ ...state, passengers })),
    setContact: (contact) => set((state) => ({ ...state, contact })),
    setNote: (note) => set((state) => ({ ...state, note })),
    setDriverNote: (driverNote) => set((state) => ({ ...state, driverNote })),
    setDistanceStartToEnd: (distanceStartToEnd) =>
      set((state) => ({ ...state, distanceStartToEnd })),
    setDistanceStartToStop: (distanceStartToStop) =>
      set((state) => ({ ...state, distanceStartToStop })),
    setDistanceStopToEnd: (distanceStopToEnd) =>
      set((state) => ({ ...state, distanceStopToEnd })),
    setAdditionalOptions: (additionalOptions) =>
      set((state) => ({ ...state, additionalOptions })),
    setHourlyBookingCount: (hourlyBookingCount) =>
      set((state) => ({ ...state, hourlyBookingCount })),
    setAdditionalVehicleCount: (additionalVehicleCount) =>
      set((state) => ({ ...state, additionalVehicleCount })),

    // New setter for splitPayment
    setSplitPayment: (splitPayment) =>
      set((state) => ({ ...state, splitPayment })),

    // New setter for selectedPassengers in splitPayment
    setSelectedPassengers: (selectedPassengers) =>
      set((state) => ({ ...state, selectedPassengers })),

    calculateTotalPrice: () =>
      set((state) => {
        const distance =
          state.distanceStartToEnd +
          state.distanceStartToStop +
          state.distanceStopToEnd;
        const vehicleBaseFare = state.vehicleDetails?.baseFare || 0;
        const hourlyRate = state.vehicleDetails?.hourlyRate || 0;

        const additionalOptionsCost = state.additionalOptions.reduce(
          (acc, option) => {
            const optionDetails = state.options.find(
              (opt) => opt.name === option
            );
            const optionPrice = optionDetails?.price.replace("$", "") || 0;

            if (option === "Hourly Bookings") {
              return acc + hourlyRate * state.hourlyBookingCount;
            } else if (option === "Add More Vehicles") {
              return (
                acc + parseFloat(optionPrice) * state.additionalVehicleCount
              );
            } else {
              return acc + parseFloat(optionPrice);
            }
          },
          0
        );

        const totalPrice =
          vehicleBaseFare + distance * 2 + additionalOptionsCost; // Distance charge is 2 per km
        return { ...state, totalPrice };
      }),

    setDistances: (distances) => set((state) => ({ ...state, ...distances })),
    setOrderNumber: (orderNumber) => set({ orderNumber }),
  }))
);

export default useStore;
