import Image from "next/image";
import logo1 from "@/../public/ride/individual/icons/section4/p1.png";
import logo2 from "@/../public/ride/individual/icons/section4/p2.png";
import logo3 from "@/../public/ride/individual/icons/section4/p3.png";
import logo4 from "@/../public/ride/individual/icons/section4/p4.png";
import logo5 from "@/../public/ride/individual/icons/section4/p5.png";
import logo6 from "@/../public/ride/individual/icons/section4/p6.png";

const Section4 = () => {
  return (
    <div className="bg-graish text-white py-12 lg:px-40 px-12">
      <p className="text-center mb-12  font-bold text-2xl">
        Our Corporate Account Advantages
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-cardgray cursor-pointer p-6 text-center shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo1}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Add More Vehicles</h3>
          <p className="text-sm">
            More the Merrier - Need more space? Book multiple rides within a
            single booking to accommodate everyone in your group comfortably.
          </p>
        </div>

        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo3}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Control & reporting</h3>
          <p className="text-sm">
            All documentation and all settings are in one personal account.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo4}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Add</h3>
          <p className="text-sm">Easily add or remove users.</p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo5}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">No usage fee</h3>
          <p className="text-sm">No extra charges for usage</p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo6}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Closing documents</h3>
          <p className="text-sm">
            Every month, the service, automatically sends closing documents.
          </p>
        </div>
        <div className="bg-cardgray cursor-pointer text-center p-6  shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={logo2}
              alt={""}
              width={40}
              height={40}
              className="w-[40px] h-[40px] m-4"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Versatility</h3>
          <p className="text-sm">Customized to your business needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
