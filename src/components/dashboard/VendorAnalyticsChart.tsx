import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { colors } from "../../utils/themeColors";

const datasetOptions = {
  fill: true,
  borderWidth: 1,
  backgroundColor: colors.primary.light,
  borderColor: colors.primary.main,
  pointRadius: 2,
  pointBorderWidth: 4,
};

const options = {
  legend: {
    display: false,
  },
  tooltips: {
    displayColors: false,
    callbacks: {
      title: () => "",
      filter: () => false,
      label: (tooltipItem) => {
        console.log(tooltipItem);

        var label = tooltipItem.label;

        if (label) {
          label += " - ";
        }

        return `${label}$${Math.round(tooltipItem.yLabel * 100) / 100}`;
      },
    },
  },
  scales: {
    grid: {
      display: false,
    },
    xAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VendorAnalyticsChart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // create label for 30 days (dummy date)
    let labelList = new Array(30).fill("").map((_item, ind) => {
      let date = new Date();
      date.setDate(ind + 1);
      return format(date, "MMM dd");
    });

    setData({
      labels: labelList,
      datasets: [
        {
          data: datasetData,
          ...datasetOptions,
        },
      ],
    });
  }, []);

  return <Line data={data} options={options} />;
};

const datasetData = [
  10,
  7,
  4,
  15,
  12,
  17,
  13,
  25,
  22,
  19,
  30,
  25,
  22,
  29,
  40,
  37,
  47,
  43,
  59,
  60,
  55,
  62,
  69,
  43,
  59,
  60,
  75,
  62,
  75,
  80,
];

export default VendorAnalyticsChart;
