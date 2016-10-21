/*
* The MIT License (MIT)
*
* Copyright (c) 2016 TRIOLOGY GmbH
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

/* jshint -W117, -W030 */
describe('welcome routes', function() {
  describe('state', function() {
    var view = 'app/welcome/welcome.html';

    beforeEach(function() {
      module('app.welcome', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state welcome to url /welcome ', function() {
      expect($state.href('welcome', {})).to.equal('/welcome');
    });

    it('should map /welcome route to welcome View template', function() {
      expect($state.get('welcome').templateUrl).to.equal(view);
    });

    it('of welcome should work with $state.go', function() {
      $state.go('welcome');
      $rootScope.$apply();
      expect($state.is('welcome'));
    });
  });
});
