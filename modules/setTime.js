var os = require('os');
var colors = require('colors/safe');

function setTime() {
	var uptime = os.uptime();
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime - (hours * 3600)) / 60);
	var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));

	//console.log('Uptime:', uptime.toFixed(), 'sec');
	console.log(colors.green('Uptime: ~'), uptime.toFixed(), 'sec');

	console.log('Hours, minutes and seconds: ', hours, 'h', minutes, 'min', seconds, 'sec');

	var minutesx = Math.floor(uptime / 60);

	console.log('Minutes and seconds: ', minutesx, 'min', seconds, 'sec');
}

exports.print = setTime;

