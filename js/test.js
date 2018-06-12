function CoffeeMachine(power) {
  this._power = power;
  this._waterAmount = 0;


}
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function getTimeToBoil() {
  return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
}
CoffeeMachine.prototype.run = function () {
  setTimeout(function () {
    console.log('Кофе готов!');
  }, this.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function (amount) {
  this._waterAmount = amount;
};


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();