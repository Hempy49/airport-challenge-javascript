describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
    plane = new Plane();

  });

  it("should be stormy", function() {
    weather.forecast = ['stormy', 'stormy'];
    expect(weather.change()).toEqual('stormy')
  });

  it("should be calm", function() {
    weather.forecast = ['calm', 'calm'];
    expect(weather.change()).toEqual('calm')
  });
});
