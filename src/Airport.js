function Airport() {
  this.planes = [];
  this.capacity = 30;
}

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
  plane.land()
}

Airport.prototype.takeOff = function(plane) {
  this.planes.pop(plane);
  plane.fly()
}
