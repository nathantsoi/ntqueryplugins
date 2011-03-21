/*
 * nT cooltips -- Tooltips Nathan Tsoi Style
 *
 * This plugin turns anything with a title into an awesome tooltip
 *
 * Simple usage:
 *  add elements with the class "tipify" and a "title" property
 *  haml e.g. 
 *    %span.comma_help.tipify{ :title => "use a comma to separate values" } ?
 *
 *  call $('body').tipify(); on page load
 *  everything in the body (or whatever selector you choose) will get cooltips
 *
 * Advanced:
 *  pass in settings to:
 *    change the fadein/out time
 *    change the location (top, left)
 *    change the tipified class name from 'tipify'
 *    change the tipbox (actual div shown as tooltip) id
 *    change the style (or use css globally)
 *    
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.
 */
 
;(function($) {
  // make sure we only add 1 tipbox
  var onlyonetipbox;

	$.tipify = {
		defaults: {
			fadein: 100,
			fadeout: 200,
			top: 15,
			left: 15,
			element: '.tipify',
      id: 'tipbox',
      style: {
        'background': '#FFF',
        'border': '1px solid #CCC'
      }
		}
	};
	
	$.fn.extend({
		tipify: function(settings) {
			settings = $.extend({}, $.tipify.defaults, settings);
			createHelper(settings);
      $(settings.element).live('mouseover', function(e) {
        var left = e.pageX + settings.left;
        var top = e.pageY + settings.top;
        $('#'+settings.id).html($(this).attr('title'))
        .css(settings.style)
        .css({
          'position': 'absolute',
          'z-index': 10000,
          'left': left,
          'top': top
        })
        .show(settings.fadein);
        $(this).attr('title', '');
      })
      .live('mouseout' , function(e) {
        $(this).attr('title', $('#'+settings.id).html());
        $('#'+settings.id).hide(settings.fadeout)
        .html('');
      });
		}
	});
	
	function createHelper(settings) {
		if(onlyonetipbox)
			return;
		onlyonetipbox = $('<div id="' + settings.id + '"></div>')
			.appendTo(document.body)
			.hide();
	}
})(jQuery);
