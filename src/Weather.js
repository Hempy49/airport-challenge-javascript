function Weather() {
this.forecast = ['stormy', 'calm']
}
Weather.prototype.change = function() {
return this.forecast[Math.floor (Math.random() * this.forecast.length)]
}
