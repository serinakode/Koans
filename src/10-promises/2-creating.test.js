describe('Creating promises', function() {
  test('should understand resolve', function(done) {
    const promise = new Promise(resolve => {
      resolve({ name: 'Myamoto', age: 32 });
    });
    promise.then(
      player => {
        expect(player).toEqual({ name: 'Myamoto', age: 32 });
        done();
      },
      () => {
        done.fail('This should not be executed');
      }
    );
  });

  test('should understand reject', function(done) {
    const promise = new Promise((resolve, reject) => {
      reject(new Error('communicationProblem'));
    });
    promise.then(
      () => {
        done.fail('This should not be executed');
      },
      reason => {
        expect(reason).toEqual(new Error('communicationProblem'));
        done();
      }
    );
  });
});
