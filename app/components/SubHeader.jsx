import Link from "next/link";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className="bg-[#684DF4] py-4 text-white">
      <div className="container mx-auto block justify-center lg:flex items-center lg:justify-between">
        <div className="hidden lg:flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>123 Main St, Anytown, USA</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <Link href="https://www.facebook.com" className="hover:text-gray-900 transition-colors duration-700">(123) 456-7890</Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <Link href="https://www.facebook.com" className="hover:text-gray-900 transition-colors duration-700">info@example.com</Link>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <span>Follow us on:</span>
          <Link href="https://www.facebook.com" className="hover:text-gray-900 transition-colors duration-700">
            <FaFacebook size={18} />
          </Link>
          <Link href="https://www.twitter.com" className="hover:text-gray-900 transition-colors duration-700">
            <FaTwitter size={18} />
          </Link>
          <Link href="https://www.instagram.com" className="hover:text-gray-900 transition-colors duration-700">
            <FaInstagram size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
