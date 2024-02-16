import React, { useEffect, useState } from "react";
import { Images } from "../Config/Images";
import TableView from "../TableView/TableView";
import { Header } from "../Config/TableHeaders";
import { Navigate, useNavigate } from "react-router";
import WalletConnect from "@walletconnect/client";

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

  return (
    <>
      <div className="background d-flex justify-content-center">
        <div className="col-8">
          <div className="dashboard-title ">
            {" "}
            Example title for the demo demo Example title for the
          </div>
          <div style={{ marginTop: "6rem" }}>
            <button
              className="btn btn-info"
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
        style={{ marginTop: "9rem", marginBottom: "5rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-8 d-flex align-items-center">
          <div className="col-6"> -------</div>
          <div className="col-6 d-flex justify-content-end">
            <button
              className="btn btn-light"
              onClick={() => {
                handleURL();
              }}
            >
              Projects List{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-xl-12 col-12 pt-4 d-flex w-100 overflow-auto">
        {cardBlocks?.map((item, index) => {
          return (
            <>
              <div className="col-xl-3 col-lg-6 col-12 p-2">
                <div className="card"></div>
              </div>
            </>
          );
        })}
      </div>
      <div
        style={{ marginTop: "10rem", marginBottom: "10rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-10 d-flex align-items-center">
          <TableView header={Leads_Header} data={data} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
