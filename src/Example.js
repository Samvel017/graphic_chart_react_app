import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function Example({countries}) {
  const dataCountry = [
    ...countries.map((el)=>{
      return {
        name: el.name.common,
        uv: el.population,
        pv: el.population/(Math.random()*10) -Math.round((Math.random()*14780)),
        amt: el.population,
      }
    }).slice(17,25)
  ]
  

  return (
    <LineChart
    style={{marginTop: '40px'}}
      width={500}
      height={300}
      data={dataCountry}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
