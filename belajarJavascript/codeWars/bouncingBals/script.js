function bouncingBall(h, bounce, window) {
  // your code here
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  var count = 1;
  var currentHigh = h * bounce;

  while (currentHigh > window) {
    count += 2;
    currentHigh *= bounce;
  }
  return count;
}
var test = bouncingBall(3, 0.66, 1);
console.log(test);
var test1 = bouncingBall(15, 0.66, 4);
console.log(test1);