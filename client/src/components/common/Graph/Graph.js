import React from "react";
import { Chart } from "react-google-charts";

const Graph = ({ firingReport, size, title }) => {
  const sortedReport = firingReport.sort((a, b) =>
    a.dateAdded.localeCompare(b.dateAdded)
  );

  const formatData = sortedReport.map((report) => {
    return [
      report.dateAdded,
      size === 32 ? report.targetSize["32cm"] : report.targetSize["48cm"],
    ];
  });

  const data = [["Date", "Value"], ...formatData];

  const options = {
    title: title,
    hAxis: {
      title: "Date >>>",
      format: "MM/dd",
    },
    vAxis: {
      title: `Target Size(${size}cm) Hits >>>`,
    },
    series: {
      0: { color: "#e2431e" },
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Graph;
