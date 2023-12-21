import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Desc = () => {
  const [animated, setAnimated] = useState(false);
  const [animatedimg, setAnimatedimg] = useState(false);
  const [animatedbox, setAnimatedbox] = useState(false);
  const [animatedimg2, setAnimatedimg2] = useState(false);
  const [animatedbox2, setAnimatedbox2] = useState(false);

  const onEnterViewport = () => {
    setAnimated(true);
  };

  const onExitViewport = () => {
    setAnimated(false);
  };
  const onEnterimg = () => {
    setAnimatedimg(true);
  };

  const onExitimg = () => {
    setAnimatedimg(false);
  };
  const onEnterBox = () => {
    setAnimatedbox(true);
  };

  const onExitBox = () => {
    setAnimatedbox(false);
  };
  const onEnterimg2 = () => {
    setAnimatedimg2(true);
  };

  const onExitimg2 = () => {
    setAnimatedimg2(false);
  };
  const onEnterBox2 = () => {
    setAnimatedbox2(true);
  };

  const onExitBox2 = () => {
    setAnimatedbox2(false);
  };
  return (
    <div
      id="about"
      className="w-100 p-0 m-0 row justify-content-center py-5 px-4"
    >
      <div className="col-lg-10 p-0 m-0 col-sm-11 col-12 px-2 px-md-4 d-flex flex-wrap  justify-content-center">
        <div className="w-100 text-center slider_title pb-4">ROADMAP</div>

        <div className="col-lg-6 col-sm-10 col-12  p-md-5 text-white">
          <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
            <div
              className={` box_container_token p-3 ${
                animatedbox && " animate_center"
              }`}
            >
              <div className="w-100 px-1 py-4">
                <p className=" px-3 pb-3 pt-3">
                  Q4/2023 <br />- Launch website <br />- Create smart contract{" "}
                  <br />- Dex listing
                  <br />- Coingecko / CMC listing
                  <br />
                  <br />
                  Q1 /2024 <br />- Airdrop <br />- Cex listing <br />- Farm &
                  earn <br />- phase 1 marketing ( twitter - youtube )<br /> -
                  10,000+ holders
                  <br />
                  <br />
                  Q2 /2024 <br />- DogInu merch <br />- phase 2 marketing (
                  tiktok - instagram )
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <div className="col-lg-6 col-sm-10 col-12  p-md-5 text-white mt-5 mt-lg-0">
          <ScrollTrigger onEnter={onEnterBox2} onExit={onExitBox2}>
            <div
              className={` box_container_token p-3 ${
                animatedbox && " animate_center"
              }`}
            >
              <div className="w-100 px-1 py-4">
                <p className="text-center px-3 pb-3 pt-3">
                  DogInu combines the viral and playful nature of memecoin with
                  a genuine purpose. It‘s not just about fun; it’s about
                  creating value for Avax. DogInu offers rewards and incentives
                  to token holders. by holding DogInu, users can participate in
                  the growth of the Avax ecosystem and capture value within it.
                  DogInu is exploring innovative use cases within the Avax
                  ecosystem to further expand its utility and value. as it
                  continues to evolve and grow, it's poised to offer more value
                  to its holders and play a significant role in the development
                  of Avax's thriving community
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Desc;
