import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaList, FaTimes } from "react-icons/fa";
import { connect, disconnect, StarknetWindowObject } from "starknetkit";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { InjectedConnector } from "starknetkit/injected";
import { WebWalletConnector } from "starknetkit/webwallet";

const Header = () => {
  const [show, setShow] = useState(false);
  const [starkAddress, setstarkAddress] = useState(false);
  const connectWallet = async () => {
    let starknetMobile = window?.starknet_argentX;
    let isInAppBrowser = starknetMobile?.isInAppBrowser;

    if (isInAppBrowser && window?.starknet_argentX) {
      try {
        const enabledValue = await sn.enable(window?.starknet_argentX);
        callback(enabledValue ?? window?.starknet_argentX);
      } catch {}
      return;
    }
    const connection = await connect({
      connectors: [
        new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
        new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
        new ArgentMobileConnector(),
      ],
    });

    if (connection) {
      setstarkAddress(connection.selectedAddress);
    }
  };
  return (
    <div
      style={{ position: "relative" }}
      className="w-100 p-2 row align-items-center m-0 p-0 bg_light"
    >
      <div className="d-flex d-lg-none col-4 justify-content-start p-0 m-0 ">
        <button
          style={{
            width: "120px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="btn btn-primary"
          onClick={connectWallet}
        >
          {starkAddress ? starkAddress : "Connect to Starknet"}{" "}
        </button>
      </div>
      <div className="col-lg-3 col-6 p-0 m-0 d-flex justify-content-center align-items-center justify-content-lg-center">
        <Link href={"/"}>
          <span>
            <img src="/logo.png" className="logo_fixed_size p-2" />
          </span>
          <span style={{ whiteSpace: "nowrap" }} className="logo_text">
            Doge Ai
          </span>
        </Link>
      </div>
      <div className="col-2 d-flex justify-content-end  d-lg-none">
        <FaList
          color="#000"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
          size={25}
        />
        {show && (
          <div
            className={`show_navbar_mobile p-3 text-black  ${
              show && " animate_navbar"
            }`}
          >
            <div className="w-100 d-flex justify-content-end">
              <FaTimes
                onClick={() => {
                  setShow(false);
                }}
                size={20}
              />
            </div>
            <div
              onClick={() => setShow(false)}
              className="w-100 d-flex flex-column pe-5"
            >
              <Link className="pt-2 pe-4 text-black" href="/">
                <span className="nav_link">Home</span>
              </Link>
              <Link className="pt-2 pe-4 text-black" href="/#airdrop">
                <span className="nav_link">Airdrop</span>
              </Link>
              <Link className="pt-2 pe-4 text-black" href="/#lp">
                <span className="nav_link">Lp</span>
              </Link>

              <Link className="pt-2 pe-4 text-black" href="/#token">
                <span className="nav_link">Tokenomics</span>
              </Link>
              <Link className="pt-2 pe-4 text-black" href="/#about">
                <span className="nav_link">About</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => setShow(false)}
        className="d-none d-lg-block col-lg-6 p-0 m-0 "
      >
        <Link className="px-4" href="/">
          <span className="nav_link">Home</span>
        </Link>
        <Link className="px-4" href="/#airdrop">
          <span className="nav_link">Airdrop</span>
        </Link>
        <Link className="px-4" href="/#lp">
          <span className="nav_link">Lp</span>
        </Link>

        <Link className="px-4" href="/#token">
          <span className="nav_link">Tokenomics</span>
        </Link>
        <Link className="px-4" href="/#about">
          <span className="nav_link">About</span>
        </Link>
      </div>
      <div className="d-none d-lg-flex col-lg-3 justify-content-center p-0 m-0 ">
        <button
          style={{
            width: "175px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="btn btn-primary"
          onClick={connectWallet}
        >
          {starkAddress ? starkAddress : "Connect to Starknet"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
