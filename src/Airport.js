function Airport(weather) {
  this.planes = [];
  this.capacity = 30;
  this.weather = weather
}

Airport.prototype.land = function(plane) {
  // check weather
  var current_weather = this.weather.change();
  if (current_weather == 'stormy') {
    throw new Error();
  }
  else {
    this.planes.push(plane);
    plane.land()
  }
  // if 'stormy': throw error
  // else: do below
}

Airport.prototype.takeOff = function(plane) {
  this.planes.pop(plane);
  plane.fly()
}
