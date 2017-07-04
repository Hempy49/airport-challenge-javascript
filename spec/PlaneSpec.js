describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should start in the air", function() {
    expect(plane.isFlying).toEqual(true);
  });
});
