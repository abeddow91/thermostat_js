function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
  this.powerSavingMode = true;
  this.maximum = 25;
}

Thermostat.prototype.up = function() {
  if (this.temperature === this.maximum) {
    throw new Error("Temperature is already at maximum");
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minimum) {
    throw new Error("Temperature is already at minimum");
  }
  this.temperature -=1;
};

Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode === true) {
    this.powerSavingMode = false;
    this.maximum = 32;
  }
  else {
    this.powerSavingMode = true;
    this.maximum = 25;
  }
};
