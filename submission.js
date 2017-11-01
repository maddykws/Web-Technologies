var xhr = new XMLHttpRequest();
xhr.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", false);
xhr.send();


var r = JSON.parse(xhr.responseText);
document.write("<p>Weather for: " + r.query.results.channel.title)

document.write("<p>Date: " + r.query.results.channel.item.condition.date);

document.write("<p>Temp: " + r.query.results.channel.item.condition.temp);
document.write("<p>Wind Chill: " + r.query.results.channel.wind.chill);

