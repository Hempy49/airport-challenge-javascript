describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane;
    airport = new Airport;
  });

  it("should start in the air", function() {
    expect(plane.isFlying).toEqual(true);
  });

  it("should not be flying when it is landed", function() {
    airport.land(plane)
    expect(plane.isFlying).toEqual(false)
  });

  it("should be flying when it has taken off", function() {
    airport.land(plane)
    airport.takeOff(plane)
    expect(plane.isFlying).toEqual(true)
  });
});
