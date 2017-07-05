function Airport(weather) {
  this.planes = [];
  this.capacity = 30;
  this.weather = weather
}

Airport.prototype.land = function(plane) {
  var current_weather = this.weather.change();
  if (current_weather == 'stormy') {
    throw new Error();
  }
  else {
    this.planes.push(plane);
    plane.land()
  }
}

Airport.prototype.takeOff = function(plane) {
  var current_weather = this.weather.change();
  if (current_weather == 'stormy') {
    throw new Error();
  }
  else {
    this.planes.pop(plane);
    plane.fly()
  }
}
