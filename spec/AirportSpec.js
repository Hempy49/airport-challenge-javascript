describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should start with no planes", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(30);
  });
});
