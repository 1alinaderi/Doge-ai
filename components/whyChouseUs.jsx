import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const WhyChouseUs = () => {
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
      style={{ overflow: "hidden" }}
      className="w-100 bg_white row justify-content-center p-0 m-0 py-5"
    >
      <div className="col-lg-10 p-0 m-0 p-3 row justify-content-center">
        <div className="col-lg-12 col-sm-10 col-12 px-0 p-md-5 text-white">
          <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
            <div
              className={`box_container_parrent p-2 py-4 d-flex flex-wrap p-md-5 ${
                animatedbox && " animate_center"
              }`}
            >
              <div
                className={`box_container py-4 px-4 col-lg-6 col-12 pe-lg-5`}
              >
                <h3 className="text-center text-lg-start display-5">
                  STEP 1: BUY
                </h3>
                <p
                  className="pe-lg-5 text-center text-lg-start fs-5"
                  style={{ color: "yellow" }}
                >
                  grab some $DogIinu with 0 taxes and share this great news with
                  your friends.
                </p>
              </div>
              <div
                className={`box_container py-4 px-4 col-lg-6 col-12 pe-lg-5`}
              >
                <h3 className="text-center text-lg-start display-5">
                  STEP 2: HODL
                </h3>
                <p
                  className="pe-lg-5 text-center text-lg-start fs-5"
                  style={{ color: "yellow" }}
                >
                  firmly hold $DogIinu and believe in DogIinu to the moon!
                  $DogIinu brings you fun and wealth, DogIinu brings you
                  everything!
                </p>
              </div>
              <div
                className={`box_container py-4 px-4 col-lg-6 col-12 pe-lg-5`}
              >
                <h3 className="text-center text-lg-start display-5">
                  STEP 3: MEME
                </h3>
                <p
                  className="pe-lg-5 text-center text-lg-start fs-5"
                  style={{ color: "yellow" }}
                >
                  enjoy your time with the community, let’s unite and earn
                  through the farm, and every piece of joy and fun that $DogIinu
                  gives us.
                </p>
              </div>
              <div
                className={`box_container py-4 px-4 col-lg-6 col-12 pe-lg-5`}
              >
                <h3 className="text-center text-lg-start display-5">
                  STEP 4: REPEAT
                </h3>
                <p
                  className="pe-lg-5 text-center text-lg-start fs-5"
                  style={{ color: "yellow" }}
                >
                  and DogIinu will company all the way! let’s never stop
                  repeating fun and earning with DogIinu!
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default WhyChouseUs;
