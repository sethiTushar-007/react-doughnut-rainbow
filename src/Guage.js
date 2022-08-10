import { Chart } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const Wrapper = styled.div``;

const Gauge = ({ id = "gauge" }) => {
  var data = {
    datasets: [
      {
        data: [3, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        backgroundColor: [
          "#336699",
          "#99CCFF",
          "#999933",
          "#666699",
          "#CC9933",
          "#006666",
          "#3399FF",
          "#993300",
          "#CCCC99",
          "#666666",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF"
        ],
        display: true,
        borderColor: "#D1D6DC"
      }
    ]
  };

  const options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
  };

  Chart.pluginService.register({
    beforeDraw: function (chart) {
      var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;
      ctx.font = 2 + "em sans-serif";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = "red";
      ctx.fillText("Text Here", width / 2 - 60, height / 2 + 100);
      ctx.save();
    }
  });

  return (
    <>
      <Wrapper>
        <Doughnut
          width={"140px"}
          height={"140px"}
          id={id}
          data={data}
          options={{
            responsive: true,
            onClick: (evt, element) => {
              if (element.length > 0) {
                var ind = element[0].index;
                console.log(ind);
              }
            },
            ...options
          }}
        />
      </Wrapper>
    </>
  );
};

export default Gauge;
