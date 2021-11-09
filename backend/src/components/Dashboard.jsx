import React from "react";
import SaleChart from "dashboard/SaleChart";
import Layout from "./Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  Row,
} from "carbon-components-react";
import UnderlinedBreadcrumb from "./UnderlinedBreadcrumb";

const Dashboard = () => {
  const bc = () => (
    <Breadcrumb style={{ margin: "10px 0 10px -15px"}}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        Dashboard
      </BreadcrumbItem>
    </Breadcrumb>
  );

  return (
    <Layout>
      <Grid>
        <UnderlinedBreadcrumb breadcrumbs={bc()}/>
        <Row>
          <SaleChart />
        </Row>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
