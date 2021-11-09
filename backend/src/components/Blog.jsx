import { Breadcrumb, BreadcrumbItem, Grid, Row } from "carbon-components-react";
import React from "react";
import Layout from "./Layout";
import UnderlinedBreadcrumb from "./UnderlinedBreadcrumb";

const Blog = () => {
  const bc = () => (
    <Breadcrumb style={{ margin: "10px 0 10px -15px" }}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>
        Blog Management
      </BreadcrumbItem>
    </Breadcrumb>
  );
  return (
    <Layout>
      <Grid>
        <UnderlinedBreadcrumb breadcrumbs={bc()} />
        <Row>
          This is blog management made in house.
        </Row>
      </Grid>
    </Layout>
  );
};

export default Blog;
