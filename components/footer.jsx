import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-100 p-0 m-0 row justify-content-center py-5 bg_22">
      <div className="text-center col-12 col-sm-11 col-lg-6 p-0 m-0  d-flex flex-wrap justify-content-center px-4">
        <span className="fs-4 fw-bold w-100 px-2 px-sm-4 px-lg-0">
          Our community grows stronger every day. to get latest updates on
          DogInu Join to our community
        </span>
        <span className="fs-5 fw-bold w-100 pt-3 text-danger">
          Join to our community
        </span>
        <span className="d-flex pt-4">
          <Link href={"https://t.me/AvaxDogInu"}>
            <span className="mx-1 icon_bg">
              <FaTwitter />
            </span>
          </Link>
          <Link
            href={"https://x.com/DogInutoken?t=upU7SmD2IoNH13c1sP2A8g&s=09"}
          >
            <span className="mx-1 icon_bg">
              <FaTelegram />
            </span>
          </Link>
          <Link href={"mailto:info@avaxdoginu.com"}>
            <span className="mx-1 icon_bg">
              <FaEnvelope />
            </span>
          </Link>
        </span>
      </div>
      <div className="w-100 p-0 m-0 text-center pt-3">
        <a href="mailto:info@avaxdoginu.com">info@avaxdoginu.com</a>
      </div>
    </div>
  );
};

export default Footer;
