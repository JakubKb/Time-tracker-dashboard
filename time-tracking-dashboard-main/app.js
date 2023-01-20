const time = document.querySelectorAll(".time");
const previous = document.querySelectorAll(".previous");

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

import dataJson from "./data.json" assert { type: "json" };
console.log(dataJson[0].timeframes.daily);

dailyBtn.addEventListener("click", () => {
  for (let i = 0; i < time.length; i++) {
    time[i].innerText = dataJson[i].timeframes.daily.current + "hrs";
    previous[i].innerText =
      "previous - " + dataJson[i].timeframes.daily.previous + "hrs";
  }
});

weeklyBtn.addEventListener("click", () => {
  for (let i = 0; i < time.length; i++) {
    time[i].innerText = dataJson[i].timeframes.weekly.current + "hrs";
    previous[i].innerText =
      "previous - " + dataJson[i].timeframes.weekly.previous + "hrs";
  }
});

monthlyBtn.addEventListener("click", () => {
  for (let i = 0; i < time.length; i++) {
    time[i].innerText = dataJson[i].timeframes.monthly.current + "hrs";
    previous[i].innerText =
      "previous - " + dataJson[i].timeframes.monthly.previous + "hrs";
  }
});
