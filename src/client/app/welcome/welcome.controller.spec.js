/* jshint -W117, -W030 */
describe('WelcomeController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.welcome');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('WelcomeController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Welcome controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Welcome', function() {
        expect(controller.title).to.equal('Welcome');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
