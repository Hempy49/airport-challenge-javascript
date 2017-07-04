describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
    plane = new Plane();
    airport = new Weather();
  });

  it("should be stormy", function() {
    expect(weather.forecast).toEqual('stormy')
  });
});
