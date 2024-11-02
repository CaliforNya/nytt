fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    tracker(data, "weekly");

    document.getElementById("daily").addEventListener("click", () => {
      tracker(data, "daily");
    });

    document.getElementById("weekly").addEventListener("click", () => {
      tracker(data, "weekly");
    });

    document.getElementById("monthly").addEventListener("click", () => {
      tracker(data, "monthly");
    });
  });

function tracker(jsonData, timeframe) {
  for (let i = 0; i < jsonData.length; i++) {
    let activity = jsonData[i];
    let activityEl = document.getElementById(activity.title);

    let hoursEl = activityEl.querySelector(".hours");
    let lastEl = activityEl.querySelector(".last");

    hoursEl.textContent = activity.timeframes[timeframe].current + " hrs";
    lastEl.textContent =
      "Last Week - " + activity.timeframes[timeframe].previous + " hrs";
  }
}
