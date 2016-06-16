var stickyHeaders = (function() {

  var $window = $(window),
      $stickies;

  var load = function(stickies) {

    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

      $stickies = stickies.each(function() {

        var $thisSticky = $(this).wrap('<div class="fixed_header" />');
  
        $thisSticky
            .data('originalPosition', $thisSticky.offset().top)//  distance from top of document
            .data('originalHeight', $thisSticky.outerHeight())// the height of the header (includes borders and padding)
              .parent()
              .height($thisSticky.outerHeight());// make height of header element the same as header and its border plus padding		  
      });

      $("#names_container").off("scroll.stickies").on("scroll.stickies", function() {
		  _whenScrolling();		
      });// turn off the scroll event handler, turn on again with a new function when scrolling
    }
  };

  var _whenScrolling = function() {

    $stickies.each(function(i) {// for each of the header

      var $thisSticky = $(this),// this is the current header with text content A-Z consecutively
          $stickyPosition = $thisSticky.data('originalPosition');// Get the distance between header and top of document

/**
 * original code: if (($stickyPosition - $window.scrollTop()) <= 200) { means: if distance between header and top of document<= top of window, which is 0
 * 
 * however, it is changed to: if (($stickyPosition - $window.scrollTop()) <= 200) {
*/

      if (($stickyPosition - $window.scrollTop()) <= 200) {// Distance between header and top of document minus top of window <= 200

        var $nextSticky = $stickies.eq(i + 1),// Grab the next header, call it 'Current'
            // Get the position of the 'Current' header and subtract it from the height of the previous header???????
            $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
            
        $thisSticky.addClass("fixed");// Set an attribute class 'fixed' to this header, fixing it to the window at top: 200px

// This sticks the two headers together when they touch (should work smoothly???)
        if ($nextSticky.length > 0 && $thisSticky.offset().top >= 0) {

          $thisSticky.addClass("absolute").css("top", '206px');//?????? need to understand $nextStickyPosition
        }

      } else {
        
        var $prevSticky = $stickies.eq(i - 1);

        $thisSticky.removeClass("fixed");// Then make the next header fixed at 200px from top of document

// This puts the header back to its original position
// If the top of the window, which is 0, is <= distance of first header from the top of document subtract its height, change it back to normal
        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };
})();

$(function() {
  stickyHeaders.load($(".fixed_header"));
});