/*! --  svgReplace.js  |  v. 0.1.0  Michael Bragg - http://michaelbragg.net  |  twitter: @michaelbragg  |  Last Updated: 08/01/2013  |  (c) 2013 Michael Bragg.  --  */

if (!Modernizr.svg) {
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
}