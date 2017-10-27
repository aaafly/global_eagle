/**
 * @param data {{temp, high, low, date}}
 * @constructor
 */
function Temp(data) {
  this.temp = null;
  this.date = null;

  if (typeof(data.temp) !== 'undefined') {
    this.temp = data.temp;
  } else if (typeof(data.high) !== 'undefined' && typeof(data.low) !== 'undefined') {
    this.temp = Math.round((parseInt(data.high) + parseInt(data.low)) / 2);
  }

  if (typeof(data.date) !== 'undefined') {
    this.date = data.date;
  } else {
    this.date = new DateHelper().getCurrentDate();
  }
}
