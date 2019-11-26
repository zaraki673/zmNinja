/* jshint -W041 */
/* jshint browser: true*/
/* global cordova,StatusBar,angular,console */

//http://learn.ionicframework.com/formulas/localstorage/

angular.module('ionic.utils', [])

  .factory('$localstorage', ['$window', function ($window) {
    return {

      init: function () {},

      set: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key) {

        return JSON.parse($window.localStorage[key] || '{}');
      }
    };
  }]);
