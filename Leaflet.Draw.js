(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['leaflet'], factory);
    } else if (typeof module !== 'undefined') {
        // Node/CommonJS
        module.exports = factory(require('leaflet'));
    } else {
        // Browser globals
        if (typeof window.L === 'undefined') {
            throw new Error('Leaflet must be loaded first');
        }
        factory(window.L);
    }
}(function (L) {
    var _measureControlId = 'polyline-measure-control';
    var _unicodeClass = 'polyline-measure-unicode-icon';
    var self;
    /**
     * Polyline Measure class
     * @extends L.Control
     */
    L.Control.Draw = L.Control.extend({

    });

//======================================================================================

    L.Map.mergeOptions({
        PolylineMeasureControl: false
    });


    L.control.draw = function (options) {
        return new L.Control.Draw (options);
    };
}));