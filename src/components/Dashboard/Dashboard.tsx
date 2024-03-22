import React, { useEffect, useState } from "react";
import { Images } from "../Config/Images";
import TableView from "../TableView/TableView";
import { Header } from "../Config/TableHeaders";
import { Navigate, useNavigate } from "react-router";
import WalletConnect from "@walletconnect/client";
import ReactFlipCard from "reactjs-flip-card";
function Dashboard() {
  const [cards, setCards] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [graphChart, setGraphChart] = useState<any>();
  const [barChartGraph, setBarChartGraph] = useState<any>();
  const [table, setTable] = useState<any>();

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
  const data = [
    {
      Customer: "ABC",
      ProductName: "ASDB",
      Email: "DFJN",
      Date: "NDFKJNS",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
  ];
  const Leads_Header = [
    {
      name: "Product Name",
      selector: (row: { Customer: any }) => row.Customer,
      cell: (row: any) => (
        <>
          <div className="d-flex col-12">
            <div className="col-2">
              <img src={Images.BlackIcon} alt="" width={24} height={24} />
            </div>
            <div className="col-10 font-bold">{row.Customer}</div>
          </div>
        </>
      ),
    },

    {
      name: "Participants",
      selector: (row: { ProductName: any }) => row.ProductName,
    },

    {
      name: "Ath ",
      selector: (row: { Email: any }) => row.Email,
    },

    {
      name: "Total",
      selector: (row: { Date: any }) => row.Date,
    },

    {
      name: "chain",
      selector: (row: { Status: any }) => row.Status,
      cell: (row: any) => (
        <>
          <div className="d-flex col-12">
            <div className="col-2">
              <img src={Images.BlackIcon} alt="" width={24} height={24} />
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Lead",
      selector: (row: { Status: any }) => row.Status,
      cell: (row: any) => (
        <>
          <div className="d-flex col-12">
            <div className="col-2">
              <img src={Images.BlackIcon} alt="" width={24} height={24} />
            </div>
          </div>
        </>
      ),
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
      <div className="background d-flex justify-content-center">
        <div className="col-10">
          <div className="col-6">
            <div className="dashboard-title "> Example title for</div>
            <div className="dashboard-text theme-color-text mt-2">
              Sophisticated. Balanced. Secure. Enabling the future of Web3.
              ChainGPT Pad is the decentralized fundraising platform incubating
              and launching the next generation of GameFi, AI, Infra, DeFi,
              DecSi, SocialFi projects.
            </div>
          </div>
          <div style={{ marginTop: "6rem" }}>
            <button
              className="btn btn-dark"
              onClick={() => {
                handleURL();
              }}
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "9rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-8 d-flex align-items-center p-2">
          <div className="col-6" style={{ color: "white", fontSize: "30px" }}>
            Pools
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              className="btn btn-dark"
              onClick={() => {
                handleURL();
              }}
            >
              Projects List{" "}
            </button>
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
