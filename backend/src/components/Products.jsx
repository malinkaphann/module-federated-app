import { Breadcrumb, BreadcrumbItem, Grid, Row } from "carbon-components-react";
import React from "react";
import Layout from "./Layout";
import UnderlinedBreadcrumb from "./UnderlinedBreadcrumb";

const Products = () => {
    const bc = () => (
        <Breadcrumb style={{ margin: "10px 0 10px -15px" }}>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#" isCurrentPage>
            Product Management
          </BreadcrumbItem>
        </Breadcrumb>
      );
      return (
        <Layout>
          <Grid>
            <UnderlinedBreadcrumb breadcrumbs={bc()}/>
            <Row>
              This is product management made in house.
            </Row>
          </Grid>
        </Layout>
      );
}

export default Products;