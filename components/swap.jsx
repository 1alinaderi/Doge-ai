import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdSwapVert } from "react-icons/md";

const Swap = (props) => {
  const { ethereumClient } = props;
  const [isapproved, setisapproved] = useState(false);
  const [walletAddress, setWalletAddress] = useState();
  const [price, setPrice] = useState();
  const [pricemigmig, setPricemigmig] = useState();
  const [animated, setAnimated] = useState(false);
  const [animated2, setAnimated2] = useState(false);
  const [migmigeinput, setmigmigeinput] = useState();
  const [animatedimg, setAnimatedimg] = useState(false);
  const [animatedimg2, setAnimatedimg2] = useState(false);
  const [BNBTOAIPEPE, setBNBTOAIPEPE] = useState(true);
  const [BNBinput, setBNBinput] = useState();

  const onEnterViewport = () => {
    setAnimated(true);
  };
  const onEnterViewport2 = () => {
    setAnimated2(true);
  };

  const onExitViewport = () => {
    setAnimated(false);
  };
  const onExitViewport2 = () => {
    setAnimated(false);
  };
  const onEnterimg = () => {
    setAnimatedimg(true);
  };
  const onEnterimg2 = () => {
    setAnimatedimg2(true);
  };

  const onExitimg = () => {
    setAnimatedimg(false);
  };
  const onExitimg2 = () => {
    setAnimatedimg2(false);
  };

  async function _BNBtoAipepe() {
    // Perform the swap.
    // const gasPrice = await web3.eth.getGasPrice();
    // const gas = await Routercontract?.methods
    //   ?.swapExactETHForTokens(
    //     (
    //       (BNBinput * price - (BNBinput * price) / 100) *
    //       1000000000
    //     ).toLocaleString(undefined, { useGrouping: false }),
    //     [WBNBAddress, migmigAddress],
    //     walletAddress,
    //     Math.floor(Date.now() / 1000) + 60 * 10
    //   )
    //   .estimateGas({
    //     from: walletAddress,
    //     value: (BNBinput * 1000000000000000000).toFixed(),
    //     gasPrice: gasPrice,
    //     chainId: 56,
    //   })
    //   .then((e) => {
    //     toast.success(e.message);
    //   })
    //   .catch((e) => {});
    // await Routercontract?.methods
    //   ?.swapExactETHForTokens(
    //     (
    //       (BNBinput * price - (BNBinput * price) / 100) *
    //       1000000000
    //     ).toLocaleString(undefined, { useGrouping: false }),
    //     [WBNBAddress, migmigAddress],
    //     walletAddress,
    //     Math.floor(Date.now() / 1000) + 60 * 10
    //   )
    //   .send({
    //     from: walletAddress,
    //     gas: gas ? gas : 0,
    //     value: (BNBinput * 1000000000000000000).toFixed(),
    //     gasPrice: gasPrice,
    //     chainId: 56,
    //   })
    //   .then((e) => {
    //     toast.success(e.message);
    //   })
    //   .catch((e) => {
    //     toast.error(e.message);
    //   });
  }

  return (
    <div
      style={{ position: "relative" }}
      className="w-100 p-0 m-0 bg_light py-5"
    >
      <div id="lp" className="w-100 row justify-content-center py-5 m-0">
        <div className="p-2 d-flex p-4 pt-4 flex-wrap align-items-center justify-content-start col-lg-4 mb-3 col-md-8 col-sm-9 col-11 bg_link_input">
          <h3 className="w-100 text-center text-black">LP</h3>

          {BNBTOAIPEPE ? (
            <div className="form-group realative_top col-md-12 col-12 d-flex  justify-content-start align-items-center">
              <span className="icon_Token">
                <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=029" />
                <span className="ms-2">AVAX</span>
              </span>
              <input
                dir="rtl"
                placeholder="0.00"
                value={BNBinput}
                onChange={(e) => setBNBinput(e.target.value)}
                className="form-field w-100 "
              />
            </div>
          ) : (
            <div className="form-group realative_top col-md-12 col-12 d-flex  justify-content-start align-items-center">
              <span className="icon_Token">
                <img src="/logo.png" />
                <span className="ms-2">DOGE INU</span>
              </span>

              <input
                dir="rtl"
                placeholder="0.00"
                value={migmigeinput}
                onChange={(e) => setmigmigeinput(e.target.value)}
                type="number"
                className=" w-100 form-field"
              />
            </div>
          )}

          <div
            style={{ cursor: "pointer", zIndex: "99" }}
            onClick={() => {
              BNBTOAIPEPE ? setBNBTOAIPEPE(false) : setBNBTOAIPEPE(true);
            }}
            className="col-12 d-flex flex-column justify-content-center align-items-center"
          >
            <MdSwapVert className="swap_icon" color="#fff" size={45} />
          </div>
          {BNBTOAIPEPE ? (
            <div className="form-group realative_bottom col-md-12 col-12 d-flex  justify-content-start align-items-center">
              <span className="icon_Token">
                <img src="/logo.png" />
                <span className="ms-2">DOGE INU</span>
              </span>

              <input
                dir="rtl"
                placeholder="0.00"
                value={BNBinput ? (BNBinput * price).toFixed(9) : ""}
                disabled
                type="text"
                className="form-field w-100 "
              />
            </div>
          ) : (
            <div className="form-group col-md-12 realative_bottom col-12 d-flex  justify-content-start align-items-center">
              <span className="icon_Token">
                <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=029" />
                <span className="ms-2">AVAX</span>
              </span>
              <input
                dir="rtl"
                placeholder="0.00"
                value={
                  migmigeinput ? (migmigeinput * pricemigmig).toFixed(18) : ""
                }
                disabled
                type="text"
                className="form-field w-100 "
              />
            </div>
          )}
          <div className="w-100 d-flex justify-content-center">
            <button
              onClick={(e) => {
                _BNBtoAipepe();
              }}
              className="w-100 rounded bg-black text-white border-0 py-2  px-5 mt-4"
            >
              ADD LP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
