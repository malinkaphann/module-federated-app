import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const data = [
  { name: "Page A", uv: 100, pv: 200, amt: 2400 },
  { name: "Page A", uv: 400, pv: 500, amt: 1400 },
  { name: "Page A", uv: 200, pv: 300, amt: 700 },
  { name: "Page A", uv: 300, pv: 2400, amt: 400 },
  { name: "Page A", uv: 440, pv: 100, amt: 300 },
  { name: "Page A", uv: 0, pv: 1000, amt: 100 },
];

const SaleChart = () => {
  const Title = styled.span`
    font-weight: bold;
    font-size: 1rem;
    line-height: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  `;

  const Box = styled.div`
    padding: 10px;
  `;

  return (
    <div className="card" style={{width: "100%", height:"100%"}}>
      <Box>
        <Title>Sale in last 6 months</Title>
      </Box>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={100}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleChart;
