//http://codepen.io/desandro/pen/paFEH

// get vendor transition property, i.e. WebkitTransition
var transitionProp = getStyleProperty('transition');
// get transition end event name
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend',
  transition: 'transitionend'
}[ transitionProp ];

$( function() {
  var $container = $('#container').packery({
  	isHorizontal: false,
    gutter: ".gutter-sizer",
  	itemSelector: ".item",
  	columnWidth: ".grid-sizer"
  });
  var pckry = $container.data('packery');
  var inOrder = $('.item');
  var len = inOrder.length;
  
  $container.on( 'click', '.item-content', function( event ) {
    var target = this;
    var $target = $( this );

    // disable transition
    $target.css( transitionProp, 'none' );
    // set current size
    $target.css({
      width: $target.width(),
      height: $target.height()
    });

    var $itemElem = $target.parent();
    var isExpanded = $itemElem.hasClass('is-expanded');
    $itemElem.toggleClass('is-expanded');
    // force redraw
    var redraw = target.offsetWidth;
    // renable default transition
    target.style[ transitionProp ] = '';

    // reset 100%/100% sizing after transition end
    if ( transitionProp ) {
      $target.one( transitionEndEvent, function() {
        target.style.width = '';
        target.style.height = '';
      });
    }

    // set new size
    $target.css({
      width: $itemElem.width(),
      height: $itemElem.height()
    });

    if ( isExpanded ) {
      // if shrinking, just layout
      for (var i = 0; i < len; i++) {
        pckry.items[i].element = inOrder[ i ];
      }
      $container.packery();
    } else {
      // if expanding, fit it
      $container.packery( 'fit', $itemElem[0] );
    }

  });
});