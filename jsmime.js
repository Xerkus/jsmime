'use strict';
(function () {
    if (typeof define === 'function' && define.amd) {
        define(function (require) {
            return {
                MimeParser: require('./mimeparser'),
                headerparser: require('./headerparser'),
                headeremitter: require('./headeremitter')
            }
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        var requirejs = require('requirejs');
        requirejs.config({
            baseUrl: __dirname
        });
        exports.MimeParser = requirejs('./mimeparser');
        exports.headerparser = requirejs('./headerparser');
        exports.headeremitter = requirejs('./headeremitter')
        exports.mimeutils = requirejs('./mimeutils')
    }
})();
