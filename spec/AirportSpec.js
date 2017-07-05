describe("Airport", function() {
  var airport, planeMock, weatherMock;

  beforeEach(function() {
    planeMock = jasmine.createSpyObj('plane', ['land', 'fly']);
    weatherMock = jasmine.createSpyObj('weather', ['change'])
    airport = new Airport(weatherMock);

    weatherMock.change.and.returnValue('calm')
    planeMock.land.and.returnValue(null);
    planeMock.fly.and.returnValue(null);
  });

  it("should start with no planes", function() {
    expect(airport.planes).toEqual([]);
  });


  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(30);
  });

  describe("Take off and landing", function() {
    beforeEach(function() {
      airport.land(planeMock);
    });

    it("should be able to land a plane", function() {
      expect(airport.planes).not.toBe([]);
    });

    it("should be able to take off a plane", function() {
      airport.takeOff(planeMock)
      expect(airport.planes).not.toContain(planeMock)
    });
  });

  describe("Bad weather", function() {
    beforeEach(function() {
      weatherMock.change.and.returnValue('stormy')
    });

    it("throws an error on attempted landing", function() {
      expect(function() { airport.land(planeMock) }).toThrowError();
    });

  it("throws an error on attemted take off", function() {
    expect(function() { airport.takeOff(planeMock) }).toThrowError();
    });
  });
});
