import logo from "@/../public/logo/image.png"; // Ensure the logo image is in the public folder
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import p1 from "@/../public/footer/p1.png";
import p2 from "@/../public/footer/p2.png";

const Footer = () => {
  return (
    <footer className="bg-graish text-white py-4 lg:mt-32">
      <div className="container mx-auto py-8  px-6  flex flex-col md:flex-row justify-between lg:items-center">
        <div className="flex flex-col md:flex-row lg:items-center">
          <Image src={logo} alt="OzOve Logo" width={200} height={200} />
          {/* <span className="text-2xl font-bold ml-2">OzOve</span> */}
        </div>
        <div>
          <div className="mt-5 md:mt-0  flex flex-col lg:items-center items-start">
            <h5 className="font-bold mb-2">Get in touch</h5>
            <p>Information: info@ozove.com.au</p>
            <p>Media: Media@ozove.com.au</p>
            <div className="flex space-x-2 mt-2">
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row lg:justify-center gap-20 lg:px-0 px-6  lg:items-center">
        <div className="lg:flex  flex-wrap lg:gap-5  lg:justify-center justify-start mt-5 md:mt-0">
          <div className="lg:mr-10 lg:py-0 py-2">
            <Link href="#">
              <h5 className="font-bold mb-2">Home</h5>
            </Link>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2">Ride</h5>
            <ul>
              <li>
                <Link href="/ride/individual">
                  <span className="cursor-pointer">Individual</span>
                </Link>
              </li>
              <li>
                <Link href="/ride/business">
                  <span className="cursor-pointer">Business</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2">Drive With Us</h5>
            <ul>
              <li>
                <Link href="/driver/captain">
                  <span className="cursor-pointer">Captain/Driver</span>
                </Link>
              </li>
              <li>
                <Link href="/driver/fleet-owner">
                  <span className="cursor-pointer">Fleet Owner</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mr-10 lg:py-0 py-2">
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              {/* <li>
                <Link href="#" passHref>
                  <span className="cursor-pointer">About us</span>
                </Link>
              </li> */}
              <li>
                <Link href="/contact" passHref>
                  <span className="cursor-pointer">Contact Us</span>
                </Link>
              </li>
              {/* <li>
                <Link href="#" passHref>
                  <span className="cursor-pointer">Careers</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="lg:flex flex-col lg:items-center   hidden lg:mt-5 md:mt-0">
          <Link href="/driver/captain">
            <button className="border border-white py-2 px-4 rounded mb-3">
              Become a Driver
            </button>
          </Link>
        </div>

        <div className=" lg:items-center lg:block hidden lg:mt-5 md:mt-0">
          <h5 className="font-bold mb-2">Ride With Us</h5>
          <div className="gap-y-2">
            <Link href="#" passHref>
              <span className="cursor-pointer gap-y-2">
                <Image src={p1} alt="Google Play" width={120} height={40} />
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="cursor-pointer gap-y-2">
                <Image src={p2} alt="App Store" width={120} height={40} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-10">
        <p>OZ Ove © 2023 | Journeying Forward, Together.</p>
      </div>
    </footer>
  );
};

export default Footer;
