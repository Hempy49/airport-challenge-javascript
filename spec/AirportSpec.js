describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("should start with no planes", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(30);
  });

  it("should be able to land a plane", function() {
    airport.land(plane)
    expect(airport.planes).not.toBe([]);
  });

  it("should be able to take off a plane", function() {
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).not.toContain(Plane)
  });
});
