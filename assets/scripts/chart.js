var dataPositif = {
  label: "Positif",
  data: [2953, 2982, 3002, 3028, 3046, 3067, 3067],
  borderColor: [
    "rgba(255, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(255, 0, 0, 1)",
  ],
  borderWidth: 3,
  fill: "none",
  lineTension: 0.1,
};
var dataRecovery = {
  label: "Sembuh",
  data: [2688, 2719, 2749, 2775, 2816, 2836, 2836],
  borderColor: [
    "rgba(60, 178, 1, 1)",
    "rgba(60, 178, 1, 1)",
    "rgba(60, 178, 1, 1)",
    "rgba(60, 178, 1, 1)",
    "rgba(60, 178, 1, 1)",
    "rgba(60, 178, 1, 1)",
    "rgba(60, 178, 1, 1)",
  ],
  borderWidth: 3,
  fill: "none",
  lineTension: 0.1,
};
var dataDied = {
  label: "Meninggal",
  data: [67, 68, 68, 69, 69, 69, 69],
  borderColor: [
    "rgba(255, 165, 0, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(255, 165, 0, 1)",
  ],
  borderWidth: 3,
  fill: "none",
  lineTension: 0.1,
};
var ctx = document.getElementById("positifChart").getContext("2d");
var positifChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["16-10", "17-10", "18-10", "19-10", "20-10", "21-10", "22-10"],
    datasets: [dataPositif],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
});
var ctx = document.getElementById("recoveryChart").getContext("2d");
var recoveryChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["16-10", "17-10", "18-10", "19-10", "20-10", "21-10", "22-10"],
    datasets: [dataRecovery],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
});
var ctx = document.getElementById("diedChart").getContext("2d");
var diedChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["16-10", "17-10", "18-10", "19-10", "20-10", "21-10", "22-10"],
    datasets: [dataDied],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
});
var ctx = document.getElementById("gabungChart").getContext("2d");
var gabungChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["16-10", "17-10", "18-10", "19-10", "20-10", "21-10", "22-10"],
    datasets: [dataPositif, dataRecovery, dataDied],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
});
