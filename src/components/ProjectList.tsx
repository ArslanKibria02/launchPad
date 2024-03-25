import React, { useEffect, useState } from "react";
import TableView from "./TableView/TableView";
import { Images } from "./Config/Images";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import OverView from "./OverView";
import DealToken from "./DealToken";
import {
  FaArrowAltCircleRight,
  FaCalendar,
  FaCentercode,
  FaFoursquare,
  FaGoogleWallet,
} from "react-icons/fa";
import Timer from "./Timer";

function ProjectList() {
  const [selectTab, setSelectedTab] = useState("OverView");
  useEffect(() => {}, []);

  const profileinfo = [
    {
      label: "Price per token",
      title: "0.214 USDT per  KIMA",
    },
    {
      label: "Swap Amount",
      title: "-",
    },

    {
      label: "Total Raise",
      title: "No",
    },

    {
      label: "Claim Type",
      title: "-",
    },
    {
      label: "Accepted Currency",
      title: "-",
    },
    {
      label: "Network",
      title: "-",
    },

    {
      label: "Token Claim Network",
      title: "-",
    },
    {
      label: "Vesting Schedule",
      title: "-",
    },
  ];
  const tapOptions = [
    {
      title: "Over View",
      key: "OverView",
      folder: <OverView />,
    },
    {
      title: "Deal & Tokennomic",
      key: "deal",
      folder: <DealToken />,
    },
  ];
  return (
    <>
      <div
        style={{ marginTop: "10rem" }}
        className="d-flex justify-content-center"
      >
        <div className="d-flex col-6 justify-content-between align-items-center pb-3r">
          <ul
            className="nav nav-tabs process-model more-icon-preocess"
            role="tablist"
          >
            <li role="presentation" className="active">
              <a
                href="#discover"
                aria-controls="discover"
                role="tab"
                data-bs-toggle="tab"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
                <p>UPCOMING</p>
              </a>

              <div className="jss177">
                <div className="jss180">
                  <div className="jss81">
                    <span>Interest Period:</span>
                    <div className="jss83 col-12">
                      <span className="col-4 d-flex">From</span>
                      <span className="date-period col-8 d-flex">
                        17:00, 25 Mar 2024
                      </span>
                    </div>
                    <div className="jss83">
                      <span className="col-4 d-flex">To</span>
                      <span className="date-period col-8 d-flex">
                        17:00, 27 Mar 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  {/* <span className="jss182">You can register Interest in</span> */}
                  <Timer /> {/* 5 minutes */}
                </div>
              </div>
            </li>
            <li role="presentation">
              <a
                href="#strategy"
                aria-controls="strategy"
                role="tab"
                data-bs-toggle="tab"
              >
                <i className="fa fa-send-o" aria-hidden="true"></i>
                <p>SWAP</p>
              </a>
              <div className="jss177">
                <span className="jss179 jss115">17:00, 29 Mar 2024</span>
              </div>
            </li>
            <li role="presentation">
              <a
                href="#optimization"
                aria-controls="optimization"
                role="tab"
                data-bs-toggle="tab"
              >
                <i className="fa fa-qrcode" aria-hidden="true"></i>
                <p>FILLED</p>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#content"
                aria-controls="content"
                role="tab"
                data-bs-toggle="tab"
              >
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <p>CLAIMABLE</p>
              </a>
              <div className="jss177">
                <span className="jss179 jss115">TBD</span>
              </div>
            </li>
            <li role="presentation">
              <a
                href="#reporting"
                aria-controls="reporting"
                role="tab"
                data-bs-toggle="tab"
              >
                <i className="fa fa-clipboard" aria-hidden="true"></i>
                <p>ENDED</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex mt-4 justify-content-center">
        <div
          className="col-6 p-2   align-items-center"
          style={{ background: "#09090e", border: "1px solid #262626" }}
        >
          <div className="d-flex col-6 justify-content-center align-items-center">
            <div className="col-4 d-flex justify-content-center align-items-center ">
              <img
                src="https://i.ibb.co/s1CbR2B/patex1688117734732.png"
                alt=""
                height={52}
              />
            </div>
            <div className="d-block col-8">
              <div
                className="p-2 d-flex justify-content-start"
                style={{ color: "white", fontSize: "22px" }}
              >
                Standard
              </div>
              <div className="p-2 d-flex justify-content-start theme-color-text">
                Standard stay jhsfbs sfbs
              </div>
            </div>
          </div>
          <div className="p-2 mt-2 col-2 mb-2 jss409">Info</div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <div className="col-6 d-flex">
          <div className="col-md-6 pe-1 col-12">
            <div
              className="p-4"
              style={{ background: "#09090e", border: "1px solid #262626" }}
            >
              {profileinfo
                ?.slice(0, Math.ceil(profileinfo.length / 2))
                .map((profile, id) => {
                  return (
                    <div key={id}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="col-md-6 mb-1 jss869">
                          {profile.label}
                        </div>
                        <div className="d-flex col-md-6 mb-1 justify-content-end font-weight-bold jss870">
                          {profile.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-md-6 ps-1 col-12">
            <div
              className="p-4"
              style={{ background: "#09090e", border: "1px solid #262626" }}
            >
              {profileinfo
                ?.slice(Math.ceil(profileinfo.length / 2))
                .map((profile, id) => {
                  return (
                    <div key={id}>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="col-md-8 mb-1 jss869">
                          {profile.label}
                        </div>
                        <div className="d-flex col-md-4 mb-1 justify-content-end font-weight-bold jss870">
                          {profile.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-6 mb-3 align-items-center">
          <Tabs
            id="controlled-tab-example"
            className="mt-30 position-relative tabs-overflow mt-3"
            activeKey={selectTab}
            onSelect={(tab: any) => {
              setSelectedTab(tab);
            }}
          >
            {tapOptions.map((item: any) => (
              <Tab eventKey={item.key} title={item.title}>
                {selectTab === item.key && item.folder}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
