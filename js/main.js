var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22montreal%2C%20qc%22)%20and%20u%3D'c'&format=json&callback=JSON_CALLBACK";

var temperatures = [];

function JSON_CALLBACK(json) {
  var items = json.query.results.channel.item.forecast.reverse();
  var html = '';
  console.log('items', items);
  $.each(items, function (key, val) {
    var mid = Math.round((parseInt(val.high) + parseInt(val.low)) / 2);
    temperatures.push({
      temperature: mid,
      date: val.date
    });
    html += '<li><span>' + mid + '</span><span>' + val.date + '</span></li>'
  });
  console.log('json', json);
  console.log('temperatures', temperatures);
  $('#temperatures-list .loading-indicator').hide();
  $('#temperatures-list ul').append(html);
  calculateStats();
}

$.ajax({
  url: url,
  dataType: "jsonp"
});

function calculateStats() {
  var max = temperatures[0].temperature;
  var min = temperatures[0].temperature;
  var total = 0;
  var values = [];
  $.each(temperatures, function (key, val) {
    if (val.temperature < min) {
      min = val.temperature;
    }
    if (val.temperature > max) {
      max = val.temperature;
    }
    total += val.temperature;
    values.push(val.temperature);
  });

  $('#stat-max').html(max + ' °C');
  $('#stat-min').html(min + ' °C');
  $('#stat-middle').html((total / temperatures.length).toFixed(2) + ' °C');
  $('#stat-median').html(calculateMedian(values).toString() + ' °C');
}

function calculateMedian(values) {
  values.sort(function (a, b) {
    return a - b
  });
  var lowMiddle = Math.floor((values.length - 1) / 2);
  var highMiddle = Math.ceil((values.length - 1) / 2);

  return Math.round((values[lowMiddle] + values[highMiddle]) / 2);
}

function getCurrentDate() {
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth(); //Be careful! January is 0 not 1
  var year = currentDate.getFullYear();

  return date + " " + (getMonthFromInt(month + 1)) + " " + year;
}

function getMonthFromInt(month) {
  var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  return mS[month];
}

$('#add-temperature button').click(function () {
  var newTemp = $('#add-temperature input').val();
  if (!/^\d+$/.test(newTemp)) {
    // todo show error
    console.log('NOT A NUMBER YO');
  } else {
    newTemp = parseInt(newTemp);
    var date = getCurrentDate();
    temperatures.push({
      temperature: newTemp,
      date: date
    });
    calculateStats();
    $('#temperatures-list ul').prepend('<li><span>' + newTemp + '</span><span>' + date + '</span></li>');
  }
});

