describe('delay', function() {
  const delay = function(timeInMillis) {
    //TODO: Implement this function so that the tests are passing
    return new Promise(function(resolve, reject) {
      return timeInMillis(function(err, result) {
        return err ? reject(err) : resolve(result);
      });
    });
  };

  test('1 - returned promise should not be resolved or rejected before timeInMillis milliseconds', function(done) {
    let invoked = false;

    delay(1000).then(() => (invoked = true), () => (invoked = true));

    setTimeout(() => {
      expect(invoked).toBe(true);
      done();
    }, 800);
  });
  test('2 - returned promise should be resolved after timeInMillis milliseconds', function(done) {
    let invoked = false;

    delay(1000).then(() => (invoked = true), () => (invoked = true));

    setTimeout(() => {
      expect(invoked).toBe(true);
      done();
    }, 1200);
  });
});
