import React from "react";
import { Row } from "carbon-components-react";

const UnderlinedBreadcrumb = ({breadcrumbs}) => (
  <Row style={{ margin: "20px 0 20px" }}>
    <div>{breadcrumbs}</div>
    <div style={{ position: "relative", width: "100%", margin: "0 0 20px 0" }}>
      <hr
        style={{
          position: "absolute",
          top: "10px",
          left: "-15px",
          height: "2px",
          width: "100vw",
          backgroundColor: "gray",
          border: "0px",
        }}
      />
    </div>
  </Row>
);

export default UnderlinedBreadcrumb;