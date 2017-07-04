function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function(plane) {
  this.isFlying = false;
}

Plane.prototype.fly = function(plane) {
  this.isFlying = true;
}
