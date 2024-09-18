// "use client";
// import React, { useState, useEffect } from "react";
// import useStore from "@/lib/store";
// import Image from "next/image";
// import { ArrowLeftIcon, Phone, Mail, MapPin } from "lucide-react";
// import { v4 as uuidv4 } from "uuid";
// import { loadStripe } from "@stripe/stripe-js";
// import Link from "next/link";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// const ReviewBooking = ({ setComponent }) => {
//   const {
//     date,
//     pickup,
//     time,
//     stop,
//     destination,
//     vehicleDetails,
//     occasion,
//     passengers,
//     contact,
//     distanceStartToEnd,
//     distanceStartToStop,
//     distanceStopToEnd,
//     additionalOptions,
//     hourlyBookingCount,
//     additionalVehicleCount,
//     options,
//     totalPrice,
//     calculateTotalPrice,
//     orderNumber,
//     setOrderNumber,
//     driverNote, // Now correctly using driverNote
//     splitPaymentDetails, // Fetch split payment details from Zustand
//   } = useStore((state) => ({
//     date: state.date,
//     pickup: state.pickup,
//     time: state.time,
//     stop: state.stop,
//     driverNote: state.driverNote, // Correctly fetching driverNote from Zustand
//     destination: state.destination,
//     vehicleDetails: state.vehicleDetails,
//     occasion: state.occasion,
//     passengers: state.passengers,
//     contact: state.contact,
//     distanceStartToEnd: state.distanceStartToEnd,
//     distanceStartToStop: state.distanceStartToStop,
//     distanceStopToEnd: state.distanceStopToEnd,
//     additionalOptions: state.additionalOptions,
//     hourlyBookingCount: state.hourlyBookingCount,
//     additionalVehicleCount: state.additionalVehicleCount,
//     options: state.options,
//     totalPrice: state.totalPrice,
//     calculateTotalPrice: state.calculateTotalPrice,
//     orderNumber: state.orderNumber,
//     setOrderNumber: state.setOrderNumber,
//     splitPaymentDetails: state.splitPaymentDetails, // Fetch the split payment details
//   }));

//   useEffect(() => {
//     calculateTotalPrice();

//     if (!orderNumber) {
//       // Generate the order number
//       const generateOrderNumber = () => {
//         const uuid = uuidv4();
//         const chars = uuid
//           .replace(/[^a-zA-Z0-9]/g, "")
//           .slice(0, 4)
//           .toUpperCase();
//         const orderNum = `${chars[0]}${chars[1]}${chars[2]}${chars[3]}`;
//         return orderNum;
//       };

//       const orderNum = generateOrderNumber();
//       setOrderNumber(orderNum);
//     }
//   }, [
//     vehicleDetails,
//     distanceStartToEnd,
//     distanceStartToStop,
//     distanceStopToEnd,
//     additionalOptions,
//     hourlyBookingCount,
//     additionalVehicleCount,
//     calculateTotalPrice,
//     orderNumber,
//     setOrderNumber,
//   ]);

//   const [showCancellationDetails, setShowCancellationDetails] = useState(false);

//   const toggleCancellationDetails = () => {
//     setShowCancellationDetails(!showCancellationDetails);
//   };

//   const additionalOptionsTotal = additionalOptions.reduce((acc, option) => {
//     if (option === "Hourly Bookings") {
//       return acc + vehicleDetails.hourlyRate * hourlyBookingCount;
//     } else if (option === "Add More Vehicles") {
//       return acc + 15 * additionalVehicleCount; // Assuming $15 per additional vehicle
//     } else {
//       const optionPrice =
//         options.find((opt) => opt.name === option)?.price.replace("$", "") || 0;
//       return acc + parseFloat(optionPrice);
//     }
//   }, 0);

//   // Calculate price per person if split payment was selected
//   const pricePerPerson =
//     splitPaymentDetails?.passengers && splitPaymentDetails.passengers > 0
//       ? (totalPrice / splitPaymentDetails.passengers).toFixed(2)
//       : null;

//   // // Prepare request data to send to backend
//   // const requestData = {
//   //   orderNumber,
//   //   date,
//   //   time,
//   //   pickup: pickup?.name || "N/A",
//   //   destination: destination?.name || "N/A",
//   //   vehicleName: vehicleDetails?.name || "N/A",
//   //   passengers: passengers || 1, // Set default if passengers is not defined
//   //   totalPrice,
//   //   contact: {
//   //     name: contact?.name || "N/A",
//   //     email: contact?.email || "N/A",
//   //     phone: contact?.phone || "N/A",
//   //   },
//   // };

//   // // Stripe function
//   // const handleBookRide = async () => {
//   //   try {
//   //     const response = await fetch("/api/create-payment-intent", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         orderNumber,
//   //         date,
//   //         time,
//   //         pickup: pickup?.name || "N/A",
//   //         destination: destination?.name || "N/A",
//   //         vehicleName: vehicleDetails?.name || "N/A",
//   //         passengers: passengers || 1,
//   //         totalPrice, // The full amount (e.g., $100)
//   //         contact: {
//   //           name: contact?.name || "N/A",
//   //           email: contact?.email || "N/A",
//   //           phone: contact?.phone || "N/A",
//   //         },
//   //       }),
//   //     });

//   //     if (!response.ok) {
//   //       const errorText = await response.text();
//   //       console.error("Error from server:", errorText);
//   //       alert(
//   //         "An error occurred while processing your request. Please try again."
//   //       );
//   //       return;
//   //     }

//   //     const { sessionId } = await response.json();

//   //     // Redirect to Stripe Checkout
//   //     const stripe = await stripePromise;
//   //     const { error } = await stripe.redirectToCheckout({ sessionId });

//   //     if (error) {
//   //       console.error("Stripe redirect error:", error);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during booking:", error);
//   //     alert("An unexpected error occurred. Please try again.");
//   //   }
//   // };

//   return (
//     <div className="lg:p-0 p-3">
//       <div className="w-full p-4 lg:overflow-auto lg:h-[460px] text-black bg-white shadow-lg rounded-lg border border-gray-300 lg:border-none">
//         <button onClick={() => setComponent(2)} className="mb-4 text-gray-700">
//           <ArrowLeftIcon className="w-6 h-6" />
//         </button>
//         <h1 className="mb-4 text-2xl font-bold text-gray-700">
//           Review Booking
//         </h1>
//         <div className="mb-2">
//           <span className="font-semibold text-gray-700">Date:</span> {date}
//           <p className="text-sm">Order #: {orderNumber}</p>
//         </div>
//         <div className="flex items-center mb-4">
//           <MapPin className="mr-4" />
//           <span>{pickup?.name || "N/A"}</span>
//         </div>
//         <div className="flex items-center mb-4">
//           <MapPin className="mr-4" />
//           <span>{destination?.name || "N/A"}</span>
//         </div>
//         {stop && (
//           <>
//             <h2 className="font-bold mb-2">Stop Point</h2>
//             <div className="flex items-center mb-4">
//               <MapPin className="mr-4" />
//               <span>{stop?.name || "N/A"}</span>
//             </div>
//           </>
//         )}
//         <hr className="mb-4" />
//         <div className="mb-4">
//           <div className="flex flex-col items-center justify-center w-24 p-2 bg-white border border-yellow-600 rounded-lg h-28">
//             <Image
//               src={vehicleDetails?.image}
//               alt={vehicleDetails?.name || "N/A"}
//               height={70}
//               width={70}
//               layout="fixed"
//               className="mb-2 rounded-lg"
//             />
//             <p className="mt-2 text-sm text-center text-black">
//               {vehicleDetails?.name || "N/A"}
//             </p>
//           </div>
//         </div>
//         <div className="p-2 mb-4 rounded bg-yellow-500/20">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="mb-1 text-sm font-semibold text-gray-700">
//                 Cancellation Policy
//               </h2>
//               <p className="mb-2 text-xs">
//                 Cancellations made seven days or less before a trip are not
//                 eligible for a refund
//               </p>
//             </div>
//             <button
//               className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full"
//               onClick={toggleCancellationDetails}
//             >
//               Details
//             </button>
//           </div>
//           {showCancellationDetails && (
//             <div className="p-2 mt-2 rounded">
//               <p className="text-xs">
//                 Cancellations made seven days or less before a trip are not
//                 eligible for a refund
//                 <p>
//                   - 100% refund: Cancellation is at least 30 days before trip
//                   date.
//                 </p>
//                 <p>
//                   - 50% refund: Cancellation is between 29 and 8 days before
//                   trip date.
//                 </p>
//                 <p>
//                   - No refund: Cancellation is 7 or less days from trip date.
//                 </p>
//               </p>
//             </div>
//           )}
//         </div>
//         <hr className="mb-4" />
//         <div className="mb-4">
//           <h2 className="font-semibold text-gray-700">Occasion</h2>
//           <p>{occasion || "None"}</p>
//         </div>
//         <hr className="mb-4" />
//         <div className="mb-4">
//           <h2 className="font-semibold text-gray-700">Total Passengers</h2>
//           <p>{passengers}</p>
//         </div>
//         <hr className="mb-4" />
//         <div className="mb-4">
//           <h2 className="font-semibold text-gray-700">Price Breakdown</h2>
//           <div className="grid mt-2 gap-y-2">
//             <div className="flex justify-between">
//               <p className="text-xs">Base Fare</p>
//               <p className="text-xs">${vehicleDetails?.baseFare}</p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-xs">Distance Charge</p>
//               <p className="text-xs">
//                 $
//                 {(
//                   (distanceStartToEnd +
//                     distanceStartToStop +
//                     distanceStopToEnd) *
//                   2
//                 ).toFixed(2)}
//               </p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-xs">Additional Options</p>
//               <p className="text-xs">${additionalOptionsTotal.toFixed(2)}</p>
//             </div>
//             {/* Conditional Price Per Person */}
//             {pricePerPerson && (
//               <div className="flex justify-between">
//                 <p className="text-sm font-semibold text-yellow-600">
//                   Price Per Person
//                 </p>
//                 <p className="text-sm font-semibold text-yellow-600">
//                   ${pricePerPerson}
//                 </p>
//               </div>
//             )}
//             <div className="flex justify-between">
//               <p className="text-sm font-semibold text-yellow-600">
//                 Total Amount
//               </p>

//               <p className="text-sm font-semibold text-yellow-600">
//                 ${totalPrice.toFixed(2)}
//               </p>
//             </div>
//           </div>
//         </div>
//         <hr className="mb-4" />
//         <div className="p-2 mb-4 border border-yellow-500 rounded">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="mb-1 text-sm font-semibold text-gray-700">
//                 Have a Question?
//               </h2>
//               <p className="mb-2 text-xs">Feel free to contact us</p>
//             </div>
//             <div className="flex space-x-2">
//               <button className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full">
//                 <Phone style={{ width: "12px", height: "12px" }} />
//               </button>
//               <button className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full">
//                 <Mail style={{ width: "12px", height: "12px" }} />
//               </button>
//             </div>
//           </div>
//         </div>
//         <p className="mb-4 text-xs">
//           By selecting Book Ride, you agree to our Cancellation policy and Ozove
//           terms and conditions
//         </p>
//       </div>
//       <Link href={"/success"}>
//         <button
//           // onClick={handleSuccess}
//           // onClick={handleBookRide}
//           className="mt-4 lg:mt-0 w-full p-2 font-bold text-black bg-yellow-500 rounded-lg"
//         >
//           Book Ride
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default ReviewBooking;

"use client";
import React, { useState, useEffect } from "react";
import useStore from "@/lib/store";
import Image from "next/image";
import { ArrowLeftIcon, Phone, Mail, MapPin } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const ReviewBooking = ({ setComponent }) => {
  const {
    date,
    pickup,
    time,
    stop,
    destination,
    vehicleDetails,
    occasion,
    passengers,
    contact,
    distanceStartToEnd,
    distanceStartToStop,
    distanceStopToEnd,
    additionalOptions,
    hourlyBookingCount,
    additionalVehicleCount,
    options,
    totalPrice,
    calculateTotalPrice,
    orderNumber,
    setOrderNumber,
    driverNote, // Now correctly using driverNote
    splitPaymentDetails, // Fetch split payment details from Zustand
  } = useStore((state) => ({
    date: state.date,
    pickup: state.pickup,
    time: state.time,
    stop: state.stop,
    driverNote: state.driverNote, // Correctly fetching driverNote from Zustand
    destination: state.destination,
    vehicleDetails: state.vehicleDetails,
    occasion: state.occasion,
    passengers: state.passengers,
    contact: state.contact,
    distanceStartToEnd: state.distanceStartToEnd,
    distanceStartToStop: state.distanceStartToStop,
    distanceStopToEnd: state.distanceStopToEnd,
    additionalOptions: state.additionalOptions,
    hourlyBookingCount: state.hourlyBookingCount,
    additionalVehicleCount: state.additionalVehicleCount,
    options: state.options,
    totalPrice: state.totalPrice,
    calculateTotalPrice: state.calculateTotalPrice,
    orderNumber: state.orderNumber,
    setOrderNumber: state.setOrderNumber,
    splitPaymentDetails: state.splitPaymentDetails, // Fetch the split payment details
  }));

  useEffect(() => {
    calculateTotalPrice();

    if (!orderNumber) {
      // Generate the order number
      const generateOrderNumber = () => {
        const uuid = uuidv4();
        const chars = uuid
          .replace(/[^a-zA-Z0-9]/g, "")
          .slice(0, 4)
          .toUpperCase();
        const orderNum = `${chars[0]}${chars[1]}${chars[2]}${chars[3]}`;
        return orderNum;
      };

      const orderNum = generateOrderNumber();
      setOrderNumber(orderNum);
    }
  }, [
    vehicleDetails,
    distanceStartToEnd,
    distanceStartToStop,
    distanceStopToEnd,
    additionalOptions,
    hourlyBookingCount,
    additionalVehicleCount,
    calculateTotalPrice,
    orderNumber,
    setOrderNumber,
  ]);

  const [showCancellationDetails, setShowCancellationDetails] = useState(false);

  const toggleCancellationDetails = () => {
    setShowCancellationDetails(!showCancellationDetails);
  };

  const additionalOptionsTotal = additionalOptions.reduce((acc, option) => {
    if (option === "Hourly Bookings") {
      return acc + vehicleDetails.hourlyRate * hourlyBookingCount;
    } else if (option === "Add More Vehicles") {
      return acc + 15 * additionalVehicleCount; // Assuming $15 per additional vehicle
    } else {
      const optionPrice =
        options.find((opt) => opt.name === option)?.price.replace("$", "") || 0;
      return acc + parseFloat(optionPrice);
    }
  }, 0);

  // Calculate price per person if split payment was selected
  const pricePerPerson =
    splitPaymentDetails?.passengers && splitPaymentDetails.passengers > 0
      ? (totalPrice / splitPaymentDetails.passengers).toFixed(2)
      : null;

  // // Prepare request data to send to backend
  // const requestData = {
  //   orderNumber,
  //   date,
  //   time,
  //   pickup: pickup?.name || "N/A",
  //   destination: destination?.name || "N/A",
  //   vehicleName: vehicleDetails?.name || "N/A",
  //   passengers: passengers || 1, // Set default if passengers is not defined
  //   totalPrice,
  //   contact: {
  //     name: contact?.name || "N/A",
  //     email: contact?.email || "N/A",
  //     phone: contact?.phone || "N/A",
  //   },
  // };

  // // Stripe function
  // const handleBookRide = async () => {
  //   try {
  //     const response = await fetch("/api/create-payment-intent", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         orderNumber,
  //         date,
  //         time,
  //         pickup: pickup?.name || "N/A",
  //         destination: destination?.name || "N/A",
  //         vehicleName: vehicleDetails?.name || "N/A",
  //         passengers: passengers || 1,
  //         totalPrice, // The full amount (e.g., $100)
  //         contact: {
  //           name: contact?.name || "N/A",
  //           email: contact?.email || "N/A",
  //           phone: contact?.phone || "N/A",
  //         },
  //       }),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       console.error("Error from server:", errorText);
  //       alert(
  //         "An error occurred while processing your request. Please try again."
  //       );
  //       return;
  //     }

  //     const { sessionId } = await response.json();

  //     // Redirect to Stripe Checkout
  //     const stripe = await stripePromise;
  //     const { error } = await stripe.redirectToCheckout({ sessionId });

  //     if (error) {
  //       console.error("Stripe redirect error:", error);
  //     }
  //   } catch (error) {
  //     console.error("Error during booking:", error);
  //     alert("An unexpected error occurred. Please try again.");
  //   }
  // };

  const handleBookRideEmail = async () => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST", // Make sure method is POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderNumber,
          date,
          time,
          pickup: pickup?.name || "N/A",
          destination: destination?.name || "N/A",
          vehicleDetails: vehicleDetails || "N/A",
          passengers: passengers || 1,
          totalPrice,
          contact: {
            name: contact?.name || "N/A",
            email: contact?.email || "N/A",
            phone: contact?.phone || "N/A",
          },
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };

  return (
    <div className="lg:p-0 p-3">
      <div className="w-full p-4 lg:overflow-auto lg:h-[460px] text-black bg-white shadow-lg rounded-lg border border-gray-300 lg:border-none">
        <button onClick={() => setComponent(2)} className="mb-4 text-gray-700">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="mb-4 text-2xl font-bold text-gray-700">
          Review Booking
        </h1>
        <div className="mb-2">
          <span className="font-semibold text-gray-700">Date:</span> {date}
          <p className="text-sm">Order #: {orderNumber}</p>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="mr-4" />
          <span>{pickup?.name || "N/A"}</span>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="mr-4" />
          <span>{destination?.name || "N/A"}</span>
        </div>
        {stop && (
          <>
            <h2 className="font-bold mb-2">Stop Point</h2>
            <div className="flex items-center mb-4">
              <MapPin className="mr-4" />
              <span>{stop?.name || "N/A"}</span>
            </div>
          </>
        )}
        <hr className="mb-4" />
        <div className="mb-4">
          <div className="flex flex-col items-center justify-center w-24 p-2 bg-white border border-yellow-600 rounded-lg h-28">
            <Image
              src={vehicleDetails?.image}
              alt={vehicleDetails?.name || "N/A"}
              height={70}
              width={70}
              layout="fixed"
              className="mb-2 rounded-lg"
            />
            <p className="mt-2 text-sm text-center text-black">
              {vehicleDetails?.name || "N/A"}
            </p>
          </div>
        </div>
        <div className="p-2 mb-4 rounded bg-yellow-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-1 text-sm font-semibold text-gray-700">
                Cancellation Policy
              </h2>
              <p className="mb-2 text-xs">
                Cancellations made seven days or less before a trip are not
                eligible for a refund
              </p>
            </div>
            <button
              className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full"
              onClick={toggleCancellationDetails}
            >
              Details
            </button>
          </div>
          {showCancellationDetails && (
            <div className="p-2 mt-2 rounded">
              <p className="text-xs">
                Cancellations made seven days or less before a trip are not
                eligible for a refund
                <p>
                  - 100% refund: Cancellation is at least 30 days before trip
                  date.
                </p>
                <p>
                  - 50% refund: Cancellation is between 29 and 8 days before
                  trip date.
                </p>
                <p>
                  - No refund: Cancellation is 7 or less days from trip date.
                </p>
              </p>
            </div>
          )}
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700">Occasion</h2>
          <p>{occasion || "None"}</p>
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700">Total Passengers</h2>
          <p>{passengers}</p>
        </div>
        <hr className="mb-4" />
        <div className="mb-4">
          <h2 className="font-semibold text-gray-700">Price Breakdown</h2>
          <div className="grid mt-2 gap-y-2">
            <div className="flex justify-between">
              <p className="text-xs">Base Fare</p>
              <p className="text-xs">${vehicleDetails?.baseFare}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs">Distance Charge</p>
              <p className="text-xs">
                $
                {(
                  (distanceStartToEnd +
                    distanceStartToStop +
                    distanceStopToEnd) *
                  2
                ).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs">Additional Options</p>
              <p className="text-xs">${additionalOptionsTotal.toFixed(2)}</p>
            </div>
            {/* Conditional Price Per Person */}
            {pricePerPerson && (
              <div className="flex justify-between">
                <p className="text-sm font-semibold text-yellow-600">
                  Price Per Person
                </p>
                <p className="text-sm font-semibold text-yellow-600">
                  ${pricePerPerson}
                </p>
              </div>
            )}
            <div className="flex justify-between">
              <p className="text-sm font-semibold text-yellow-600">
                Total Amount
              </p>

              <p className="text-sm font-semibold text-yellow-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="p-2 mb-4 border border-yellow-500 rounded">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-1 text-sm font-semibold text-gray-700">
                Have a Question?
              </h2>
              <p className="mb-2 text-xs">Feel free to contact us</p>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full">
                <Phone style={{ width: "12px", height: "12px" }} />
              </button>
              <button className="flex items-center justify-center h-6 px-2 text-xs text-black bg-yellow-500 rounded-full">
                <Mail style={{ width: "12px", height: "12px" }} />
              </button>
            </div>
          </div>
        </div>
        <p className="mb-4 text-xs">
          By selecting Book Ride, you agree to our Cancellation policy and Ozove
          terms and conditions
        </p>
      </div>
      <Link href={"/success"}>
        <button
          // onClick={handleSuccess}
          // onClick={handleBookRideEmail}
          className="mt-4 lg:mt-0 w-full p-2 font-bold text-black bg-yellow-500 rounded-lg"
        >
          Book Ride
        </button>
      </Link>
    </div>
  );
};

export default ReviewBooking;
