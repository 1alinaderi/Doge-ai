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
    <div id="about" className="w-100 p-0 m-0 row justify-content-center py-5">
      <div className="col-lg-10 p-0 m-0 col-sm-11 col-12 px-2 px-md-4 d-flex flex-wrap  justify-content-center">
        <div className="col-lg-6 col-sm-10 col-12  p-md-5 text-white">
          <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
            <div
              className={` box_container_token p-3 ${
                animatedbox && " animate_center"
              }`}
            >
              <div className="w-100 px-1 py-4">
                <p className="text-center px-3 pb-3 pt-3">
                  empowering Starknet users to earn more. DogeAI serves as a
                  vital platform within the growing Starknet ecosystem, enabling
                  users to stake their Stark assets and earn rewards, and thus
                  enhancing the value of their holdings. It acts as a catalyst
                  for value generation and empowers users to maximize their
                  rewards while contributing to the ecosystem's prosperity.
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
                  DogeAI combines the viral and playful nature of memecoin with
                  a genuine purpose. It‘s not just about fun; it’s about
                  creating value for Starknet. DogeAI offers rewards and
                  incentives to token holders. by holding DogeAI, users can
                  participate in the growth of the Starknet ecosystem and
                  capture value within it. DogeAI is exploring innovative use
                  cases within the Starknet ecosystem to further expand its
                  utility and value. as it continues to evolve and grow, it's
                  poised to offer more value to its holders and play a
                  significant role in the development of starknet's thriving
                  community
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
