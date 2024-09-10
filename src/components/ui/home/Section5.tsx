import Image from "next/image";
import ozove from "@/../public/home/icons/ozove.png";
import shieldIcon from "@/../public/home/icons/shield.png";
import check from "@/../public/home/icons/check.png";
import walletIcon from "@/../public/home/icons/coin.png";
import clockicon from "@/../public/home/icons/clock.png";
import tailoredIcon from "@/../public/home/icons/setting.png";

const Section5 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white py-10 lg:px-24 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Left Column */}
      <div className="flex flex-col lg:w-1/3 w-full space-y-4">
        <div className="bg-graish flex justify-between items-center cursor-pointer text-white lg:mx-0 mx-4  p-6 rounded-lg shadow-lg h-[180px]">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-customYellow">
              Affordable & Transparent
            </h3>
            <p className="text-xs">Clear pricing with no hidden fees</p>
          </div>
          <Image
            src={walletIcon}
            alt="Affordable & Transparent"
            className="w-[70px] h-[70px]"
            width={70}
            height={70}
          />
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-customYellow cursor-pointer lg:mx-0 mx-4 text-white lg:p-4 p-6 rounded-lg shadow-lg h-[180px] flex-grow flex lg:flex-col justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                Tailored To You
              </h3>
              <p className="lg:text-xs text-base">
                Our services adapt to your requirements and timetable
              </p>
            </div>
            <Image
              src={tailoredIcon}
              alt="Tailored To You"
              className="lg:w-[50px] lg:h-[50px] w-[70px] h-[70px] lg:-mt-4 lg:ml-24"
              width={50}
              height={50}
            />
          </div>

          <div className="bg-graish cursor-pointer text-white lg:mx-0 mx-4  lg:p-4 p-6 rounded-lg shadow-lg h-[180px] flex-grow flex lg:flex-col justify-between items-center">
            <div>
              <h3 className="lg:text-base text-2xl font-bold mb-2 text-customYellow">
                Integrated Mobility Solutions
              </h3>
              <p className="lg:text-xs text-base">
                We blend car-sharing and delivery services into one platform
              </p>
            </div>
            <Image
              src={check}
              alt="Integrated Mobility Solutions"
              className="lg:w-[50px] lg:h-[50px] w-[70px] h-[70px]  lg:ml-24"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>

      {/* Center Column */}
      <div className="lg:w-1/3 w-full lg:mx-0 ">
        <div className="bg-graish lg:mx-0 mx-4 cursor-pointer text-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image
            src={ozove}
            alt="Journeying Forward, Together."
            className="lg:h-[267px] h-[240px] lg:w-[240px] w-[240px]"
            width={240}
            height={240}
          />
          <h2 className="text-xl font-bold mt-4 text-center">
            Journeying Forward, Together.
          </h2>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col lg:w-1/3 w-full space-y-4">
        <div className="bg-customYellow cursor-pointer text-white lg:mx-0 mx-4  p-6 rounded-lg shadow-lg h-[180px] flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-black">
              Secure & Safe
            </h3>
            <p className="lg:text-xs text-base">
              Highly trained and professional drivers catering to a wide range
              of customer needs
            </p>
          </div>
          <Image
            src={shieldIcon}
            alt="Secure & Safe"
            className="w-[70px] h-[70px]"
            width={70}
            height={70}
          />
        </div>

        <div className="bg-graish cursor-pointer text-white lg:mx-0 mx-4  p-6 rounded-lg shadow-lg h-[180px] flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-customYellow">
              Real-Time Tracking
            </h3>
            <p className="lg:text-xs text-base">
              Stay informed with live in-app order tracking
            </p>
          </div>
          <Image
            src={clockicon}
            alt="Real-Time Tracking"
            className="w-[70px] h-[70px]"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
