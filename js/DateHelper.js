function DateHelper() {
}

DateHelper.prototype.getMonthFromInt = function (month) {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month];
};

DateHelper.prototype.getCurrentDate = function () {
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  return date + " " + (this.getMonthFromInt(month)) + " " + year;
};
