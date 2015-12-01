(function ( $ ) {
  $.fn.transitionContent = function(options) {
    var index = 0;
    var settings = $.extend({
      // These are the defaults.
      fadeIn: 1000,
      fadeOut: 1000,
      delay: 3000
    }, options );

    return this.each(function(){
      //fadeInOut();
      var $this = $(this);
      $(this).children().not(".active").hide();
      var interval = setInterval(function(){
        var active = $this.children(".active");
        $(active).fadeOut(settings.fadeOut, function(){
          $(this).hide().removeClass("active");
          var element = $(this).next();
          if(element.length == 0) {
            element = $this.children().first()
          }
          element.addClass("active").fadeIn(settings.fadeIn);
        });
      }, settings.delay + settings.fadeIn + settings.fadeOut);
    });
  };
}( jQuery ));