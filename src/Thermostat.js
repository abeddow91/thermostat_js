function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_POWER_SAVING_MODE = 25;
  this.MAX_TEMP_NO_POWER_SAVING_MODE = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.currentUsage = "medium-usage";
  this.maximum = this.MAX_TEMP_POWER_SAVING_MODE;
}

Thermostat.prototype.up = function() {
  if (this.temperature === this.maximum) {
    throw new Error("Temperature is already at maximum");
  }
  this.temperature += 1;
  this._setUsage();
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.MIN_TEMP) {
    throw new Error("Temperature is already at minimum");
  }
  this.temperature -= 1;
  this._setUsage();
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

Thermostat.prototype.usage = function () {
   return this.currentUsage;
};

Thermostat.prototype._setUsage = function (){
  if (this.temperature < 18) {
    this.currentUsage = "low-usage";
  }
  else if (this.temperature >= 18 && this.temperature < 25) {
    this.currentUsage = "medium-usage";
  }
  else {
    this.currentUsage = "high-usage";
  }
};

Thermostat.prototype._powerSavingModeSettings = function(boolean, temperature) {
  this.powerSavingMode = boolean;
  this.maximum = temperature;
};
