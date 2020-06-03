// var fdata = [0.28, 15.16, 5.57, 0.12, 6.71, 72.10, 0.06]
// var fzones = ["Zone A", "Zone AE", "Zone AE - Floodway", "Zone AH", "Zone X - 500yr", "Zone X - 500+yr", "Area Not Included"]

var fData = {
  labels: [
    "Zone A",
    "Zone AE",
    "Zone AE - Floodway",
    "Zone AH",
    "Zone X - 500yr",
    "Zone X - 500+yr",
    "Area Not Included"
  ],
  datasets: [
    {
      data: [0.28, 15.16, 5.57, 0.12, 6.71, 72.10, 0.06],
      backgroundColor: [
        "#b3cccc",
        "#5c8a8a",
        "94b8b8",
        "#d1e0e0",
        "#75a3a3",
        "#3d5c5c",
        "#f0f5f5"
      ],
      borderColor: "black",
      borderWidth: 1
    }]
};

var chartOptions = {
  cutoutPercentage: 50
}


var ctx = document.getElementById("floodChart");
var floodChart = new Chart(ctx, {
  type: 'doughnut',
  data: fData,
  options: chartOptions
});
