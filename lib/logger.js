'use strict';
var winston = require('winston');

winston.remove(winston.transports.Console);

winston.add(winston.transports.Console,
    {
        level: 'verbose',
        colorize: true,
        timestamp: true,
        debugStdout: true
    }
);


module.exports = winston;
