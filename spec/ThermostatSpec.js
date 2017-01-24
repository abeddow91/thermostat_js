describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should have a starting temperature of 20 C", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature by 1 C", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("should decrease the temperature by 1 C", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it("should have a minimum temperature of 10 C", function() {
    expect(thermostat.minimum).toEqual(10);
  });
  it("should throw an error if the user tries to put the temperature below 10 C", function() {
    thermostat.temperature = 10;
    expect(function(){thermostat.down();}).toThrowError("Temperature is already at minimum");
  });

});
