'use strict';

var onReady = function() {
  $('.l-container').on('click', '.show-more', function(event) {
    var element = $(event.currentTarget);

    element.removeClass('show-more');
    element.addClass('show-less');

    element.parents('.l-container').find('.more-information').show();
    element.text('Show less');
  });

  $('.l-container').on('click', '.show-less', function(event) {
    var element = $(event.currentTarget);

    element.removeClass('show-less');
    element.addClass('show-more');

    element.parents('.l-container').find('.more-information').hide();
    element.text('Show more');
  });
}

$(document).ready(onReady);
