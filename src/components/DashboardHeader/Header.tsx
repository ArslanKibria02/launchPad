import { use } from "echarts/core";
import React, { useState } from "react";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";
import { useLocation, useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { truncateSync } from "fs";
import Web3 from "web3";
import WalletConnect from "@walletconnect/client";
const DasbhboardHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);
  const [wcConnector, setWcConnector] = useState<WalletConnect | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  const pathname = location.pathname;
  console.log(pathname, "123");
  const style = {
    color: pathname === "/projects/detail" ? "white" : "darkgray",
    fontSize: "20px", // Adjust the font size as needed
  };
  const handleURL = () => {
    navigate(`/projects`);
  };
  const handleUrlHome = () => {
    navigate(`/`);
  };
  const onclose = () => {
    setShow(false);
  };
  // const handleDisconnect = async () => {
  //   console.log("check");
  //   if (window.ethereum) {
  //     window.localStorage.clear();
  //   }
  // };
  async function connectWalletMetaMask() {
    const web3 = new Web3(window.ethereum);
    console.log("hello");
    try {
      if (!window.ethereum) {
        alert("Please Install the wallet");
      } else await window.ethereum.enable();
      let accounts = await web3.eth.getAccounts();
      // dispatch(setWalletAddress(accounts[0]));
      // chainId = await web3.eth.getChainId()
      let isconnected = await window.ethereum.isConnected();
      if (isconnected) {
        console.log(isconnected, "isconnected");
        // dispatch(setwalletStatus(isconnected));
        // setConnected(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function setupWalletConnect() {
    try {
      if (!wcConnector) {
        const connector = new WalletConnect({
          bridge:
            "wss://z.bridge.walletconnect.org/?env=browser&host=localhost%3A3000&protocol=wc&version=1",
        });

        connector.on("connect", (error, payload) => {
          if (error) {
            console.error("Error connecting:", error);
            return;
          }
          setConnected(true);
          console.log("Connected successfully");
          setAccounts(payload.params[0].accounts);
        });

        connector.on("session_update", (error, payload) => {
          if (error) {
            console.error("Session update error:", error);
            return;
          }
          setAccounts(payload.params[0].accounts);
        });

        connector.on("disconnect", (error, payload) => {
          if (error) {
            console.error("Error disconnecting:", error);
            return;
          }
          setConnected(false);
          setAccounts([]);
          console.log("Disconnected");
        });

        setWcConnector(connector);
      }
    } catch (error) {
      console.error("Error setting up WalletConnect:", error);
    }
  }
  return (
    <>
      <div className="header_layout">
        <div className="d-flex align-items-center">
          <div
            className="col-12 col-md-6 d-flex align-items-center navbar-brand pl-2"
            style={style}
          >
            <div
              className="col-3 d-flex justify-content-center cursor-pointer"
              onClick={handleUrlHome}
            >
              <img src={Images.hyfaLogo} alt="" width={40} height={40} />
            </div>

            <div className="col-3 col-md-3 col-xl-2 pt-1">
              <div onClick={handleURL} className="cursor-pointer">
                Projects
              </div>
            </div>
            <div className="col-3 col-md-3 col-xl-2 pt-1">
              <div>Dashboard</div>
            </div>
            <div className="col-5"></div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="col-md-7"></div>
            <div className="col-md-5  d-flex justify-content-center">
              <button
                className="btn btn-dark"
                onClick={() => {
                  setShow(true);
                }}
              >
                {" "}
                Connect wallet
              </button>
            </div>
          </div>
        </div>
        {showSuperAdmin && (
          <>
            <div className="d-flex">
              <SuperAdmin />
            </div>
          </>
        )}
      </div>

      <Modal show={show} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex">
              <div
                className="d-flex justify-content-start"
                style={{ fontSize: "16px", fontWeight: 700, color: "black" }}
              >
                Select a Wallet
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="wallet-connect-dialog">
          <div className="d-block justify-content-around ">
            <div
              onClick={() => {
                {
                  connectWalletMetaMask();
                }
              }}
              className={" d-flex row cursor-pointer pb-4"}
              style={{ alignItems: "center" }}
            >
              <div
                className={"d-flex align-items-center clr_black_new"}
                style={{
                  justifyContent: "start",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                <div className="col-2" style={{ justifyContent: "start" }}>
                  <img src={Images.metamask} alt={""} height={22}></img>
                </div>
                <div className="col-9">MetaMask</div>
                <div>
                  <img
                    src="https://app.team.finance/assets/wallet/right-arrow.svg"
                    alt=""
                    height={14}
                  />
                </div>
              </div>
            </div>
            <div
              className={" d-flex f-pt-1 row cursor_pointer pb-2"}
              style={{ alignItems: "center" }}
              onClick={() => {
                {
                  setupWalletConnect();
                }
              }}
            >
              <div
                className={"d-flex align-items-center clr_black_new"}
                style={{
                  justifyContent: "start",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                <div className="col-2" style={{ justifyContent: "start" }}>
                  <img src={Images.wallectconnect} alt={""} height={16}></img>
                </div>
                <div className="col-9">{"Wallet Connect"}</div>
                <div>
                  <img
                    src="	https://app.team.finance/assets/wallet/qr-code-scan-icon.svg"
                    alt=""
                    height={14}
                  />
                </div>
              </div>
            </div>
            {/* <div
                onClick={() => {
                  // connectToCoinbaseWallet();
                }}
                className={" d-flex f-pt-1 row cursor_pointer"}
                style={{ alignItems: "center" }}
              >
                <div
                  className={"d-flex align-items-center clr_black_new"}
                  style={{
                    justifyContent: "start",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  <div className="col-2" style={{ justifyContent: "start" }}>
                    <img
                      src="	https://app.team.finance/assets/wallet/coinBase@3x.png"
                      height={22}
                    ></img>
                  </div>
                  <div className="col-9">{"Coinbase Wallet"}</div>
                  <div>
                    <img
                      src="	https://app.team.finance/assets/wallet/qr-code-scan-icon.svg"
                      alt=""
                      height={14}
                    />
                  </div>
                </div>
              </div> */}
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default DasbhboardHeader;
