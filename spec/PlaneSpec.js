describe("Plane", function() {
  var plane, airportMock;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should start in the air", function() {
    expect(plane.isFlying).toEqual(true);
  });

  describe("#land", function() {
    it("should not be flying when it is landed", function() {
      plane.land();
      expect(plane.isFlying).toEqual(false)
    });
  });

  describe("#fly", function() {
    it("should be flying when it has taken off", function() {
      plane.fly();
      expect(plane.isFlying).toEqual(true)
    });
  });
});
