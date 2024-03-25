import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Pools from "../Pools";
import List from "../List";
function Dashboard() {
  const [cards, setCards] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [graphChart, setGraphChart] = useState<any>();
  const [barChartGraph, setBarChartGraph] = useState<any>();
  const [table, setTable] = useState<any>();

  const navigate = useNavigate();
  useEffect(() => {}, []);
  const handleURL = () => {
    navigate(`/projects`);
  };

  return (
    <>
      <div className="background d-flex justify-content-center">
        <div className="col-10">
          <div className="col-5">
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
      <Pools />
      <List />
    </>
  );
}

export default Dashboard;
