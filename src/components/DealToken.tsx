import React, { useEffect, useState } from "react";
import { Tabs } from "react-bootstrap";

function DealToken() {
  const cardBlocks = [
    {
      title: "Token Distribution",
      detail: "Invest in the future leaders of Web3",
    },
    {
      title: "Distribution Type",
      detail: "Invest in the future leaders of Web3",
    },
  ];
  const cardBlocksTwo = [
    {
      title: "Token Price",
      detail: "$0.04",
    },
    {
      title: "Fully Market Cap",
      detail: "$0.04",
    },
    {
      title: "TGE Market Cap",
      detail: "$0.04",
    },
  ];
  return (
    <>
      <div className="pt-3">
        {cardBlocks?.map((item, index) => {
          return (
            <>
              <div className="mt-4 card-details">
                <div className="p-3">
                  <div
                    className="d-flex flex-wrap p-2"
                    style={{ color: "darkgray" }}
                  >
                    {item.title}
                  </div>
                  <h2
                    className="d-flex flex-wrap p-2"
                    style={{ lineHeight: "2rem", color: "white" }}
                  >
                    {item.detail}
                  </h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="pt-3">
        <div style={{ color: "darkgray" }}>Pool</div>
        <div className="row">
          {cardBlocksTwo?.map((item, index) => {
            return (
              <>
                <div className="mt-4 col-4 p-1">
                  <div className="card-details p-2">
                    <div
                      className="d-flex flex-wrap p-2"
                      style={{ color: "darkgray" }}
                    >
                      {item.title}
                    </div>
                    <h3
                      className="d-flex flex-wrap p-2"
                      style={{ lineHeight: "2rem", color: "white" }}
                    >
                      {item.detail}
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DealToken;
