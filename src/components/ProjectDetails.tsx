import React, { useEffect, useState } from "react";

function ProjectDetails() {
  const cardBlocks = [
    {
      title: "Title1",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
    {
      title: "Title2",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
    {
      title: "Title1",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
    {
      title: "Title2",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
  ];

  return (
    <>
      <div className="card-detail d-flex justify-content-center"></div>
      <div
        style={{ marginTop: "9rem", marginBottom: "5rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-8 mb-3 align-items-center">
          {cardBlocks?.map((item, index) => {
            return (
              <>
                <div className="pt-4 ">
                  <div
                    className="d-flex flex-wrap"
                    style={{ color: "darkgray" }}
                  >
                    {item.title}
                  </div>
                  <h1
                    className="d-flex flex-wrap pt-4"
                    style={{ lineHeight: "2rem" }}
                  >
                    {item.detail}
                  </h1>
                  <div
                    className="d-flex flex-wrap pt-4"
                    style={{ lineHeight: "2rem" }}
                  >
                    {item.description}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="col-lg-12 col-xl-12 col-12 pt-4 d-flex w-100 overflow-auto"></div>
    </>
  );
}

export default ProjectDetails;
