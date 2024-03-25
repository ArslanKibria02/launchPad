import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableView = ({ header, data }: any) => {
  const [table, setTable] = useState<any>();
  const [actionList, setActionList] = useState<any>();
  useEffect(() => {}, []);
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px",
        // marginBottom: "9px",
        border: "none",
        backgroundColor: "#23232b",
        // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        borderBottom: "0",
        color: "darkgray",
        fontSize: "20px",
        justifyContent: "start", // Center the content horizontally
        alignItems: "center", // Center the content vertically (if needed)
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        fontSize: "12px",
        color: "white",
        justifyContent: "start", // Center the content horizontally
        alignItems: "center", // Center the content vertically (if needed)
      },
    },
    // pagination: {
    //   style: {
    //     // Customize the pagination container style
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     alignItems: "center",
    //     padding: "10px",
    //   },
    //   pageButtonsStyle: {
    //     // Customize the individual page buttons style
    //     borderRadius: "5px",
    //     marginLeft: "5px",
    //     marginRight: "5px",
    //     padding: "8px",
    //     color: "white",
    //     backgroundColor: "#004D72",
    //     "&:hover": {
    //       backgroundColor: "#005587",
    //     },
    //   },
    //   currentPageStyle: {
    //     // Customize the current page indicator style
    //     color: "#004D72",
    //     fontWeight: "bold",
    //   },
    //   rowsPerPageDropdownStyle: {
    //     // Customize the rows per page dropdown style
    //     backgroundColor: "#004D72",
    //     color: "white",
    //     borderRadius: "5px",
    //     border: "1px solid #004D72",
    //   },
    // },
  };
  const hasMeaningfulData = data.some((item: any) =>
    Object.values(item).some((value) => value !== "")
  );

  const noDataComponent = hasMeaningfulData ? null : (
    <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
      No data available
    </div>
  );

  useEffect(() => {
    const parsedColumns = header?.map((column: any) => {
      if (typeof column.selector === "string") {
        try {
          // Use Function constructor instead of eval for better security
          const renderFunction = new Function(`return ${column.selector}`)();
          console.log(renderFunction, "renderFunction");
          column.selector = renderFunction;
        } catch (error) {
          console.error("Error parsing render function:", error);
        }
      }
      if (column.type === "list") {
        setActionList(column);
        console.log(actionList, "actionList");
        return {
          ...column,
          cell: (row: any) => (
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {row.actionList.map((item: any, index: any) => (
                    <Dropdown.Item key={index}>
                      <Link to={`${item.Link}`} className="a-link">
                        <div className="d-flex">
                          <div className="col-2">
                            <img src={item.img} alt="" />
                          </div>

                          <div className="col-10">{item.label}</div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ),
        };
      }
      if (column.type == "color") {
        console.log(column.selector, "...column");
        return {
          ...column,
          cell: (row: any) => (
            <div
              style={{
                padding: "0.22rem 1rem",
                borderRadius: "12px",
                backgroundColor: column.backGround,
                color: column.color,
                cursor: row.ByDefault === "Active" ? "pointer" : "default",
              }}
            >
              {column.selector(row)}
            </div>
          ),
        };
      }
      if (column.type === "button") {
        return {
          ...column,
          cell: (row: any) => (
            <>
              <div className="d-flex">
                {column.editTitle && (
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#0dcaf0",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    {column.editTitle}
                  </div>
                )}
                {column.updateTitle && (
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#4253a1",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    {column.updateTitle}
                  </div>
                )}
                {column.deleteTitle && (
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    {column.deleteTitle}
                  </div>
                )}
              </div>
            </>
          ),
        };
      }
      return column;
    });
    console.log(parsedColumns, "......");
    setTable(parsedColumns);
  }, []);
  return (
    <>
      <DataTable
        columns={table}
        data={data}
        customStyles={customStyles}
        noDataComponent={noDataComponent}
      />
    </>
  );
};

export default TableView;