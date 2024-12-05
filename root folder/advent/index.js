async function fetchData() {
  const res = await fetch("input.txt");
  let data = await res.text();

  data = data.split("\n");
  // console.log(data);
  let arr1 = [];
  let arr2 = [];

  const splitter = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i].split("   ");
      arr1.push(array[i][0]);
      arr2.push(array[i][1]);
    }
  };

  splitter(data);

  // console.log(arr1);

  const combinedArr = arr1.concat(arr2);
  // console.log(combinedArr);

  function isSafe(number) {
    const digits = number.toString().split("").map(Number);

    const [a, b, c, d, e] = digits;

    if (
      !(
        Math.abs(b - a) >= 1 &&
        Math.abs(b - a) <= 3 &&
        Math.abs(c - b) >= 1 &&
        Math.abs(c - b) <= 3 &&
        Math.abs(d - c) >= 1 &&
        Math.abs(d - c) <= 3 &&
        Math.abs(e - d) >= 1 &&
        Math.abs(e - d) <= 3
      )
    ) {
      return false;
    }

    if (
      !(a < b && b < c && c < d && d < e) &&
      !(a > b && b > c && c > d && d > e)
    ) {
      return false;
    }

    return true;
  }

  function countSafeReports(data) {
    let safeCount = 0;
    for (const number of data) {
      if (isSafe(Number(number))) {
        safeCount++;
      }
    }
    return safeCount;
  }

  const result = countSafeReports(combinedArr);
  console.log(`safe numbers: ${result}`);
}

fetchData();
