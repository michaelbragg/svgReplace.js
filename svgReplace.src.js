/*! --  svgReplace.js  |  v. 0.1.0  https://github.com/michaelbragg/svgReplace.js  |  Last Updated: 26/01/2013  |  (c) 2013 Michael Bragg - http://michaelbragg.net  --  */

if (!Modernizr.svg) {
  $.fn.svgReplace();
}


(function( $ ){
  $.fn.svgReplace = function() {
    $("img").each(function () {
      var src = this.src.split("."),
          format = src[src.length - 1],
          removeFormat = src.pop(),
          addFormat = src.push("png"),
          url = src.join('.');
      if (format === 'svg') {
        this.src = url;
      }
    });
  };
})( jQuery );
