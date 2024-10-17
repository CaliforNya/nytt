var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = "HOLD";
  if (count >= 0) {
    holdbet = "BET";
  }

  return count + " " + holdbet;
}

cc(2);
cc(5);
cc("A");
cc("K");
cc(10);

console.log(cc(8));

// objects
