/*
 * nT querystring -- parse the page query string
 *
 * This plugin parses the current page query string and returns an object
 *
 * Simple usage:
 *  call $.querystring(); => get an object with the windows current query string parsed ask key value pairs
 *  call $.querystring({someparam:'someval'}); => get a query string representation of the past object
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.
 */
 
;(function($) {
	$.extend({
    querystring: function(objectToBuildString) {
      // If we didnt get objectToBuildString, build an object
      if (typeof objectToBuildString === 'undefined' || objectToBuildString === null) {
        var queryString = window.location.search;
        if (typeof queryString === 'undefined' || queryString.trim() === "") {
          return null;
        }
        queryString = queryString.substring(1);
        var queryStringObj = {};
        var keyEqualsValStrings = [];
        if (queryString.indexOf('&') < 0){
          keyEqualsValStrings = [queryString];
        }
        else {
          keyEqualsValStrings = queryString.split('&');
        }
        for (var i = 0; i < keyEqualsValStrings.length; i++) {
          var keyValPair = keyEqualsValStrings[i].split('=');
          queryStringObj[keyValPair[0]] = keyValPair[1];
        }
        return queryStringObj;
      }
      // Otherwise, build a string
      else {
        var params = [];
        for (paramName in objectToBuildString) {
          params.push([paramName, objectToBuildString[paramName]].join('='));
        }
        return '?' + params.join('&');
      }
    }
	});
})(jQuery);
