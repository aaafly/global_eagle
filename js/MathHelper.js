function MathHelper() {
}

MathHelper.prototype.calculateMedian = function (values) {
  values.sort(function (a, b) {
    return a - b
  });
  var lowMiddle = Math.floor((values.length - 1) / 2);
  var highMiddle = Math.ceil((values.length - 1) / 2);

  return Math.round((values[lowMiddle] + values[highMiddle]) / 2);
}
