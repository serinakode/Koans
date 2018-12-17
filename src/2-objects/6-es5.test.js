describe('Some ES5 features', function() {
  test('should understand Object.create', function() {
    let numEnumerableProperties = 0;
    const myObject = Object.create(
      {},
      {
        firstName: {
          value: 'Myamoto',
          writable: true,
          enumerable: false,
          configurable: false
        }
      }
    );

    expect(myObject.firstName).toBe('Myamoto');
    for (const propertyName in myObject) {
      numEnumerableProperties++;
    }
    expect(numEnumerableProperties).toBe(0); // checkpoint
    try {
      myObject.firstName = 'Hattori';
    } catch (e) {
      //intentionally empty
    }
    expect(myObject.firstName).toBe('Hattori');
    try {
      delete myObject.firstName;
    } catch (e) {
      //intentionally empty
    }
    expect(myObject.firstName).toBe('Hattori');
  });

  // The Object.seal() method seals an object, preventing new properties from being added to it.
  // åValues of present properties can still be changed as long as they are writable.
  test('should understand Object.seal', function() {
    const samurai = {
      name: 'Myamoto'
    };
    Object.seal(samurai);

    try {
      samurai.name = 'Hattori';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.name).toBe('Hattori');

    try {
      samurai.address = '1 Ninja Way';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.address).toBe(undefined);
  });
  test('should understand Object.freeze', function() {
    const samurai = {
      name: 'Myamoto'
    };
    Object.freeze(samurai);

    try {
      samurai.name = 'Hattori';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.name).toBe('Myamoto');

    try {
      samurai.address = '1 Ninja Way';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.address).toBe(undefined);
  });
});
