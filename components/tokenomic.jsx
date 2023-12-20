import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Tokenomic = () => {
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
      id="token"
      className="w-100 bg_light p-0 m-0 row justify-content-center align-items-center py-3"
    >
      <div className="col-lg-10 p-0 m-0 p-3 row justify-content-center align-items-center">
        <div className="w-100 text-center slider_title pb-4">Tokenomics</div>

        <div className="col-lg-6 col-sm-10 col-12  p-md-5 text-white">
          <ScrollTrigger onEnter={onEnterBox} onExit={onExitBox}>
            <div
              className={` box_container_token p-3 ${
                animatedbox && " animate_center"
              }`}
            >
              <div className="w-100 p-4 py-4">
                <h2 className="text-center py-3 ">
                  Total Supply <br />
                  <span>200,000,000,000,000,000</span>{" "}
                </h2>
                <span className="w-100 d-flex py-3">
                  <span className="col-6 text-center ">
                    airdrop <br /> 35%
                  </span>
                  <span className="col-6 text-center">
                    farm <br /> 18%
                  </span>
                </span>
                <span className="w-100 d-flex py-3">
                  <span className="col-6 text-center">
                    burn <br /> 15%
                  </span>
                  <span className="col-6 text-center">
                    lp pool <br /> 11%
                  </span>
                </span>
                <span className="w-100 d-flex py-3">
                  <span className="col-6 text-center">
                    cex listing <br /> 9%
                  </span>
                  <span className="col-6 text-center">
                    marketing <br /> 8%
                  </span>
                </span>
                <span className="w-100 d-flex py-3 justify-content-center">
                  <span className="col-6 text-center">
                    team <br /> 4%
                  </span>
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
