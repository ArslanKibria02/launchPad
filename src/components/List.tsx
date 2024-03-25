import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
function Dashboard() {
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
        style={{ marginTop: "15rem", marginBottom: "15rem" }}
        className=" d-flex justify-content-center"
      >
        <div className="col-8">
          {cardBlocks?.map((item, index) => {
            return (
              <>
                <div className="mb-3 d-flex align-items-center">
                  <div
                    className="d-flex p-2 col-12"
                    style={{ backgroundColor: "#111115" }}
                  >
                    <div className="d-flex col-3 justify-content-center align-items-center">
                      <div className="col-4 d-flex justify-content-center align-items-center ">
                        <img
                          src="https://i.ibb.co/s1CbR2B/patex1688117734732.png"
                          alt=""
                          height={52}
                        />
                      </div>
                      <div className="d-block col-8">
                        <div className="p-2 jss409">Standard</div>
                        <div
                          className="p-2 d-flex justify-content-center"
                          style={{ color: "white" }}
                        >
                          Standard
                        </div>
                      </div>
                    </div>
                    <div className="col-9 d-flex">
                      <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-block">
                          <div className="p-2 theme-color-text">
                            Total Raise
                          </div>
                          <div className="p-2" style={{ color: "white" }}>
                            $5000
                          </div>
                        </div>
                      </div>
                      <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-block">
                          <div className="p-2 theme-color-text">
                            Total Price
                          </div>
                          <div className="p-2" style={{ color: "white" }}>
                            $5000
                          </div>
                        </div>
                      </div>
                      <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-block">
                          <div className="p-2 theme-color-text">
                            Current Price
                          </div>
                          <div className="p-2" style={{ color: "white" }}>
                            $5000
                          </div>
                        </div>
                      </div>
                      <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-block ">
                          <div className="p-2 theme-color-text">Market GAP</div>
                          <div className="p-2" style={{ color: "white" }}>
                            $5000
                          </div>
                        </div>
                      </div>
                      <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-block">
                          <div className="p-2 theme-color-text">type</div>
                          <div className="p-2" style={{ color: "white" }}>
                            $5000
                          </div>
                        </div>
                      </div>
                      <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-block col-8">
                          <div className="p-2 theme-color-text">type</div>
                          <div className="p-2" style={{ color: "white" }}>
                            $5000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <TableView header={Leads_Header} data={data} /> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
