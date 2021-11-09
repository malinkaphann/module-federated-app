import React from "react";
import Layout from "./Layout";
import UserList from "user/UserList";
import UnderlinedBreadcrumb from "./UnderlinedBreadcrumb";
import { Breadcrumb, BreadcrumbItem, Grid, Row } from "carbon-components-react";

const Users = () => {
  const bc = () => (
    <Breadcrumb style={{ margin: "10px 0 10px -15px" }}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        User Management
      </BreadcrumbItem>
    </Breadcrumb>
  );
  return (
    <Layout>
      <Grid>
        <UnderlinedBreadcrumb breadcrumbs={bc()}/>
        <Row>
          <UserList />
        </Row>
      </Grid>
    </Layout>
  );
};

export default Users;
