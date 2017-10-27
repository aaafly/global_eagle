/**
 * @param data {{temp, high, low, date}}
 * @constructor
 */
function Temp(data) {
  this.temp = null;
  this.date = null;
  console.log('Temp data', data);

  if (typeof(data.temp) !== 'undefined') {
    console.log('from temp');
    this.temp = data.temp;
  } else if (typeof(data.high) !== 'undefined' && typeof(data.low) !== 'undefined') {
    console.log('from high low');
    this.temp = Math.round((parseInt(data.high) + parseInt(data.low)) / 2);
  }

  if (typeof(data.date) !== 'undefined') {
    this.date = data.date;
    console.log('this.date (provided)', this.date);
  } else {
    this.date = new DateHelper().getCurrentDate();
    console.log('this.date (now)', this.date);
  }
}
