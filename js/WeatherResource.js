function WeatherResource() {
}

WeatherResource.prototype.url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22montreal%2C%20qc%22)%20and%20u%3D'c'&format=json&callback=?";

WeatherResource.prototype.getWeatherData = function (callback) {
  $.getJSON(this.url)
    .done(function (json) {
      callback(json.query.results.channel.item.forecast);
    })
    .fail(function (jqxhr, textStatus, error) {
      console.log('api error', textStatus + ", " + error);
    });
};
