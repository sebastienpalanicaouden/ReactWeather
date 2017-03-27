var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=19f8ee41aafa493485011d4072c49aaa';


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error('Error fetching the data');
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Error fetching the data');
    });
  }
}
