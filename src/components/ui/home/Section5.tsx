import Image from "next/image";
import ozove from "@/../public/home/icons/ozove.png"; // replace with your actual path
import shieldIcon from "@/../public/home/icons/shield.png"; // replace with your actual path
import check from "@/../public/home/icons/check.png"; // replace with your actual path
import walletIcon from "@/../public/home/icons/coin.png"; // replace with your actual path
import clockicon from "@/../public/home/icons/clock.png"; // replace with your actual path
import tailoredIcon from "@/../public/home/icons/setting.png"; // replace with your actual path

const Section5 = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-white py-10 lg:px-16">
      <div className="flex flex-col lg:w-1/3 w-full lg:py-0 lg:px-0 py-1 px-4">
        <div className="bg-graish flex flex-row cursor-pointer text-white m-2 p-6 rounded-lg shadow-lg">
          <div className="lg:pr-8">
            <h3 className="lg:text-[32px] text-2xl font-bold mb-4 text-customYellow">
              Affordable & Transparent
            </h3>
            <p className="lg:text-[16px]  text-xs">
              Clear pricing with no hidden fees
            </p>
          </div>
          <Image
            src={walletIcon}
            alt="Affordable & Transparent"
            className="mt-20 lg:mt-0 lg:w-[80px] w-[100px] h-[100px] lg:h-[80px]"
            width={80}
            height={50}
          />
        </div>

        <div className="flex flex-row">
          <div className="bg-customYellow  cursor-pointer text-white m-2 p-5 rounded-lg shadow-lg lg:h-[200px] flex-grow">
            <div>
              {" "}
              <h3 className="lg:text-[19px] text-2xl font-bold mb-4 text-black">
                Tailored To You
              </h3>
              <p className="text-[16px] text-xs">
                Our services adapt to your requirements and timetable
              </p>
            </div>
            <div className="flex justify-items-end items-end justify-end">
              <Image
                src={tailoredIcon}
                alt="Tailored To You"
                className=" lg:-mt-6 w-[60px] lg:h-60px] h-[60px] pt-2"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="bg-graish  cursor-pointer text-white m-2 p-5 rounded-lg shadow-lg lg:h-[200px] flex-grow">
            <div>
              <h3 className="lg:text-[19px] text-2xl font-bold mb-4 text-customYellow">
                Integrated Mobility Solutions
              </h3>
              <p className="text-[16px] text-xs">
                We blend car-sharing and delivery services into one platform
              </p>
            </div>
            <div className="flex justify-items-end  items-end justify-end">
              <Image
                src={check}
                alt="Integrated Mobility Solutions"
                className=" lg:-mt-8 w-[60px] lg:h-60px] h-[50px]"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 w-full lg:px-0 px-4 ">
        <div className="bg-graish cursor-pointer text-white m-2 p-9 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <Image
            src={ozove}
            alt="Integrated Mobility Solutions"
            className="lg:h-[225px] h-[240px] lg:w-[210px] w-[240px]"
            width={200}
            height={200}
          />
          <h2 className="text-[24px] mt-8 text-lg font-bold">
            Journeying Forward, Together.
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/3 w-full lg:px-0 px-4">
        <div className="bg-customYellow cursor-pointer flex flex-col lg:flex-row text-white m-2 p-6 rounded-lg shadow-lg lg:h-[170px]">
          <div className="">
            <h3 className="text-[32px] font-bold mb-4 text-black">
              Secure & Safe
            </h3>
            <p className="lg:text-[16px] text-base">
              Highly trained and professional drivers catering to wide range of
              customer needs
            </p>
          </div>
          <div className="flex justify-items-end items-end justify-end">
            <Image
              src={shieldIcon}
              alt="Secure & Safe"
              className="mt-4 lg:mt-0 w-[80px] h-[80px]"
              width={50}
              height={30}
            />
          </div>
        </div>

        <div className="bg-graish cursor-pointer flex flex-col lg:flex-row text-white m-2 p-6 rounded-lg shadow-lg lg:h-[170px]">
          <div className="lg:pr-8">
            <h3 className="text-[28px] font-bold mb-4 text-customYellow">
              Real-Time Tracking
            </h3>
            <p className="lg:text-[16px] text-base">
              Stay informed with live in-app order tracking
            </p>
          </div>
          <div className="flex justify-items-end items-end justify-end">
            <Image
              src={clockicon}
              alt="Real-Time Tracking"
              className="mt-4 lg:mt-0 w-[80px] h-[80px] justify-items-end "
              width={50}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
