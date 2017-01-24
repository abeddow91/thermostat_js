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
    expect(thermostat.MIN_TEMP).toEqual(10);
  });
  it("should throw an error if the user tries to put the temperature below 10 C", function() {
    thermostat.temperature = 10;
    expect(function() {
      thermostat.down();
    }).toThrowError("Temperature is already at minimum");
  });
  it("should be in power saving mode when initialized", function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });
  it("should have a maximum temperature of 25 when initialized", function() {
    expect(thermostat.maximum).toEqual(25);
  });
  it("should be able to turn power saving mode off", function() {
    thermostat.powerSavingModeSwitch();
    expect(thermostat.powerSavingMode).toEqual(false);
  });
  it("should be able to turn power saving mode on", function() {
    thermostat.powerSavingModeSwitch();
    thermostat.powerSavingModeSwitch();
    expect(thermostat.powerSavingMode).toEqual(true);
  });
  it("should be change the max temperature to 32 when not in power saving mode", function() {
    thermostat.powerSavingModeSwitch();
    expect(thermostat.maximum).toEqual(32);
  });
  it("should throw an error if the user tries to go over the max temperature in power saving mode", function() {
    thermostat.temperature = 25;
    expect(function (){
      thermostat.up();
    }).toThrowError("Temperature is already at maximum");
  });
  it("should throw an error if the user tries to go over the max temperature not in power saving mode", function() {
    thermostat.powerSavingModeSwitch();
    thermostat.temperature = 32;
    expect(function (){
      thermostat.up();
    }).toThrowError("Temperature is already at maximum");
  });
  it("should reset the temperature to the default temperature", function(){
    thermostat.temperature = 24;
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
});
