module.exports = function () {
    return {
        files: [
            'lib/**/*.js'
        ],

        tests: [
            'test/**/*Spec.js'
        ],
        testFramework: 'jasmine@2.3.4',

        workers: {
            initial: 1,
            regular: 1,
            recycle: true
        },

        delays: {
            edit: 500,
            run: 150
        },
        setup: function () {

            var winston = require('winston');
            if (!winston.transports.ConsoleLogger) {
                var ConsoleLogger = winston.transports.ConsoleLogger = function (options) {
                    this.level = 'verbose';
                };
                require('util').inherits(ConsoleLogger, winston.Transport);
                ConsoleLogger.prototype.log = function (level, msg, meta, callback) {
                    console.log(msg);
                    callback(null, true);
                };
                winston.remove(winston.transports.Console);
                winston.add(winston.transports.ConsoleLogger);
                winston.add = winston.remove = function () {

                };
            }

        },

        debug: true,
        env: {
            // use 'node' type to use node.js
            type: 'node',
            runner: 'node'

        }
    };
};
