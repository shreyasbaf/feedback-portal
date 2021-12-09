import React from "react";
import { GrayTableHead, Col, LandingContainer } from "./style";
import ReactTable from "react-table";
import { StyledTable } from "../../shared/components/table/styledTable";

const Landing = () => {
  const [tableData, setTableData] = React.useState([
    { name: "medhansh", email: "test@123.com", message: "hello world" },

    { name: "Some", email: "Some@test.com", message: "hello world" },
    {
      name: "Name",
      email: "george@foo.com",
      message:
        "The writeQuery method enables you to write data to your cache in a shape that matches a GraphQL query. It resembles readQuery, except that it requires a data option",
    },
    { name: "Employee", email: "Employee@goo.com", message: "hello world" },
    { name: "Sender", email: "paul@goo.com", message: "hello world" },
    { name: "Anonymous", email: "Anonymous.com", message: "hello world" },
  ]);
  const [deskResponsive, setDeskResponsive] = React.useState(false);
  const renderTableHeading = (heading: any) => {
    return (
      <GrayTableHead style={{ fontFamily: "Regular" }}>{heading}</GrayTableHead>
    );
  };
  return (
    <LandingContainer>
      <StyledTable>
        {/* @ts-ignore */}
        <ReactTable
          data={tableData}
          columns={[
            {
              Header: <div>{renderTableHeading("Name")}</div>,
              accessor: "date",
              Cell: (row: any) => (
                <Col>
                  <div>{row.original.name}</div>
                </Col>
              ),
              sortMethod: (a: any, b: any) => Number(b) - Number(a),
              width: deskResponsive ? 130 : 140,
            },
            {
              Header: <div>{renderTableHeading("Email")}</div>,
              accessor: "pair",
              Cell: (row: any) => (
                <Col>
                  <div>{row.original.email}</div>
                </Col>
              ),
              sortMethod: (a: any, b: any) => Number(b) - Number(a),
              width: deskResponsive ? 90 : 140,
            },
            {
              Header: renderTableHeading(`Message`),
              accessor: "side",
              Cell: (row: any) => (
                <Col>
                  <div>{row.original.message}</div>
                </Col>
              ),
              sortMethod: (a: any, b: any) => Number(b) - Number(a),
              width: deskResponsive ? 90 : 120,
            },
          ]}
          showPagination={true}
          // defaultPageSize={10}
          minRows={0}
          resizable={false}
          // sortable={true}
          // multiSort={true}
          showFilters={true}
        />
      </StyledTable>
    </LandingContainer>
  );
};
export default Landing;
