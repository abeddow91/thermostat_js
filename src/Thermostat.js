function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.minimum) {
    throw new Error("Temperature is already at minimum");
  }
  this.temperature -=1;
};
