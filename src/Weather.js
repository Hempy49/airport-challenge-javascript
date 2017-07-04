function Weather() {
this.forecast = 'stormy'
}
Weather.prototype.change = function() {
this.forecast = ['stormy', 'calm'].sample
}
