var os = require('os');
var setTime = require('./setTime');
var colors = require('colors/safe');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    //console.log('System:', type);
    //console.log('Release:', release);
    // console.log('CPU model:', cpu);
    // console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    //setTime.print();
    //console.log('User name:', userInfo.username);
    //console.log('Home dir:', userInfo.homedir);

    console.log(colors.grey('System:'), type);
    console.log(colors.red('Release:'), release);
    console.log(colors.blue('CPU model:'), cpu);
    setTime.print();
    console.log(colors.yellow('User name:'), userInfo.username);
    console.log(colors.gray('Home dir:'), userInfo.homedir);
}

exports.print = getOSinfo;