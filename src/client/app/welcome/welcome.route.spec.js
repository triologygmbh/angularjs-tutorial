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
