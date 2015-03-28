/* global describe, it */

(function () {
  'use strict';

  describe('More information is hidden', function () {
    beforeEach(function() {
      loadFixtures('more-information-hidden.html');
      onReady();
    });

    describe('click on button', function () {
      it('shows more information', function () {
        $('.show-more').click();
        expect($('.more-information')).toBeVisible();
      });

      it('changes button text', function () {
        var element = $('.show-more');
        element.click();
        expect(element).toHaveText('Show less');
      });

      it('modify html class', function () {
        var element = $('.show-more');
        element.click();
        expect(element).toHaveClass('show-less');
      });
    });
  });

  describe('More information is visible', function () {
    beforeEach(function() {
      loadFixtures('more-information-visible.html');
      onReady();
    });

    describe('click on button', function () {
      it('shows less information', function () {
        $('.show-less').click();
        expect($('.more-information')).toBeHidden();
      });

      it('changes button text', function () {
        var element = $('.show-less');
        element.click();
        expect(element).toHaveText('Show more');
      });

      it('modify html class', function () {
        var element = $('.show-less');
        element.click();
        expect(element).toHaveClass('show-more');
      });
    });
  });


})();
