function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_POWER_SAVING_MODE = 25;
  this.MAX_TEMP_NO_POWER_SAVING_MODE = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.maximum = this.MAX_TEMP_POWER_SAVING_MODE;
}

Thermostat.prototype.up = function() {
  if (this.temperature === this.maximum) {
    throw new Error("Temperature is already at maximum");
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.MIN_TEMP) {
    throw new Error("Temperature is already at minimum");
  }
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingModeSwitch = function() {
  if (this.powerSavingMode === true) {
    this._powerSavingModeSettings(false, this.MAX_TEMP_NO_POWER_SAVING_MODE );
  }
  else {
    this._powerSavingModeSettings(true, this.MAX_TEMP_POWER_SAVING_MODE );
  }
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype._powerSavingModeSettings = function(boolean, temperature) {
  this.powerSavingMode = boolean;
  this.maximum = temperature;
};
