function DOMHelper() {
}

DOMHelper.prototype.math = new MathHelper();

DOMHelper.prototype.refreshData = function (temps) {
  this.hideLoading();
  this.refreshTemps(temps);
  this.refreshStats(temps);
  console.log('REFRESH DATA');
}

DOMHelper.prototype.hideLoading = function () {
  $('.loading-indicator').hide();
  $('.waiting-loading').removeClass('hide');
}

DOMHelper.prototype.refreshTemps = function (temps) {
  var html = '';
  $.each(temps, function (key, temp) {
    html += '<li><span>' + temp.temp + ' °C</span><span class="date">' + temp.date + '</span></li>'
  });

  $('#temperatures-list').find('ul').html(html);
}

DOMHelper.prototype.refreshStats = function (temps) {
  var max = temps[0].temp;
  var min = temps[0].temp;
  var total = 0;
  var values = [];
  $.each(temps, function (key, val) {
    if (val.temp < min) {
      min = val.temp;
    }
    if (val.temp > max) {
      max = val.temp;
    }
    total += val.temp;
    values.push(val.temp);
  });

  $('#stat-max').html(max + ' °C');
  $('#stat-min').html(min + ' °C');
  $('#stat-middle').html((total / temps.length).toFixed(2) + ' °C');
  $('#stat-median').html(this.math.calculateMedian(values).toString() + ' °C');
}
