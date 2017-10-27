
var domHelper = new DOMHelper();
var temps = [];
var weatherResource = new WeatherResource();
weatherResource.getWeatherData(function (weatherData) {
  $.each(weatherData, function (key, temp) {
    temps.push(new Temp(temp));
  });
  domHelper.refreshData(temps);
  console.log(temps)
});

$('#add-temperature').find('button').click(function () {
  var newTemp = $('#add-temperature').find('input').val();
  if (!/^-?\d+$/.test(newTemp)) {
    // todo show error
    console.log('NOT A NUMBER YO');
  } else {
    temps.unshift(new Temp({temp: parseInt(newTemp)}));
    domHelper.refreshData(temps);
  }
});
