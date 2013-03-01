(function( $ ) {
  $.fn.any = function() {
    var $this = $(this);
    if ($this.length > 0) { return $this; }
    return null;
  };
})( jQuery );
