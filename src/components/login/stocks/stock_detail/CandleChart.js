import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const CandleChart = () => {
  const [series, setSeries] = useState([
    {
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
      ],
    },
  ]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/stocks/candle`)
      .then((response) => {
        console.log(`CandleChart useEffect then python`);
        response.data.map((element) => {
          series.push(element);
        });
      })
      .catch((error) => {
        console.log(`CandleChart useEffect catch python`);
      });
  });

  /*const [series] = useEffect([{
        data: [{ //axios들어가야지~!
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
        },
        { //axios들어가야지~!
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33]
        }]
    }]);*/

  const [options] = useState({
    chart: {
      type: "candlestick",
      height: 350,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  });

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </div>
    </>
  );
};

export default CandleChart;
