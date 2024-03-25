import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import ReactFlipCard from "reactjs-flip-card";
import { Images } from "./Config/Images";
function Pools() {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const cardBlocks = [
    {
      button: "Upcoming",
      title: "BABY SHAMU",
      value: "Fair Launch ",
      launchType: "Soft",
      coinCap: "1 BNB",
      progress: "(0.00%)",
      progressNumber: "60",
      liquidity: "100%",
      lockTime: "365 days",
      startAmount: "0 BNB",
      endAmount: "1 BNB",
    },
    {
      button: "Upcoming",
      title: "Tangyuan",
      value: "1 USDT = 3,100 Tangyuan ",
      launchType: "Soft/Hard",
      coinCap: "5,000 USDT - 20,000 USDT",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "100 days",
      startAmount: "0 USDT",
      endAmount: "20,000 USDT",
    },
    {
      button: "Upcoming",
      title: "Crypto Funded Projects",
      value: "1 USDC = 1.1 CFP",
      launchType: "Soft/Hard",
      coinCap: "100,000 USDC - 400,000 USDC",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "31 days",
      startAmount: "0 USDC",
      endAmount: "400,000 USDC",
    },
    {
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
    {
      button: "Sale LIVE",
      title: "Skillon",
      value: "Fair Launch",
      launchType: "Soft",
      coinCap: "20 BNB",
      progress: "(0.00%)",
      liquidity: "51%",
      lockTime: "90 days",
      startAmount: "0 BNB",
      endAmount: "20 BNB",
    },
  ];
  const handleURL = () => {
    navigate(`/projects`);
  };
  const styles = {
    card: { background: "#23232b", color: "white", borderRadius: 20 },
  };

  return (
    <>
      <div
        style={{ marginTop: "9rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-8 d-flex align-items-center p-2">
          <div className="col-6" style={{ color: "white", fontSize: "30px" }}>
            Project List
          </div>
          <div className="col-6 d-flex justify-content-end">
            {/* <button
              className="btn btn-dark"
              onClick={() => {
                handleURL();
              }}
            >
              Projects List{" "}
            </button> */}
            <div className="jss919">
              <input
                className="jss920 "
                type="text"
                placeholder="Search by Pool name, Token Symbol"
                value=""
              />
              <img
                className="jss924"
                src="/images/icons/icon_search.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" col-12 d-flex justify-content-center">
        <div className="col-lg-8 col-xl-8 col-12 pt-4 d-flex flex-wrap">
          {cardBlocks?.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    handleURL();
                  }}
                  className="col-xl-4 col-lg-6 col-12 p-2"
                >
                  <ReactFlipCard
                    frontStyle={styles.card}
                    backStyle={styles.card}
                    frontComponent={
                      <div className="p-3">
                        <div className="col-12 overflow-hidden">
                          <img
                            className="w-100"
                            src="https://i.ibb.co/2vMMBtN/Kima.png"
                            alt=""
                          />
                        </div>
                        <div className="p-2">
                          <div className="d-flex align-items-center">
                            <div className="col-md-10 col-8">{item.title}</div>
                            <div className="col-md-2 col-4">
                              <img src={Images.Cash} alt="" height={40} />
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <div className="col-md-8 col-8 theme-color-text">
                              Total Raise
                            </div>
                            <div className="col-md-4 col-4 d-flex justify-content-end">
                              $5000
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-3">
                            <div className="col-md-8 col-8 theme-color-text">
                              Total Price
                            </div>
                            <div className="col-md-4 col-4 d-flex justify-content-end">
                              $5000
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-3">
                            <div className="col-md-8 col-8 theme-color-text">
                              Start Date
                            </div>
                            <div className="col-md-4 col-4 d-flex justify-content-end">
                              -- -- --
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-3">
                            <div className="col-md-8 col-8 theme-color-text">
                              Type
                            </div>
                            <div className="col-md-4 col-4 d-flex justify-content-end">
                              ----
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-3">
                            <div className="col-md-8 col-8 theme-color-text">
                              Market Maker
                            </div>
                            <div className="col-md-4 col-4 d-flex justify-content-end">
                              ----
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    backComponent={
                      <div className="card d-flex justify-content-center align-items-center">
                        <h1 className="d-flex justify-content-center">
                          Upcoming
                        </h1>
                      </div>
                    }
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Pools;
