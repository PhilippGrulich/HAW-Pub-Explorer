'use strict';

describe('Service: favService', function () {

  // load the service's module
  beforeEach(module('pubExplorerApp'));

  // instantiate service
  var favService;
  beforeEach(inject(function (_favService_) {
    favService = _favService_;
  }));

  it('should do something', function () {
    expect(!!favService).toBe(true);
  });

});
