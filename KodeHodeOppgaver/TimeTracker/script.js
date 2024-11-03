let dataArray = [
  {
    title: "work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "selfcare",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

document.getElementById("daily").addEventListener("click", () => {
  tracker(dataArray, "daily");
});

document.getElementById("weekly").addEventListener("click", () => {
  tracker(dataArray, "weekly");
});

document.getElementById("monthly").addEventListener("click", () => {
  tracker(dataArray, "monthly");
});

function tracker(dataArray, timeframe) {
  for (let i = 0; i < dataArray.length; i++) {
    let activity = dataArray[i];
    let activityEl = document.getElementById(activity.title);

    let hoursEl = activityEl.querySelector(".hours");
    let lastEl = activityEl.querySelector(".last");

    hoursEl.textContent = activity.timeframes[timeframe].current + " hrs";
    lastEl.textContent =
      "Last Week - " + activity.timeframes[timeframe].previous + " hrs";
  }
}
