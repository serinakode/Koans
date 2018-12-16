describe('Object literals', function() {
  test('1 - should make sure that tests are setup correctly', function() {
    expect(1).toBe(1);
  });
  test('2 - should understand object literals', function() {
    const samurai = {
      age: 32,
      isMaster: true,
      name: 'Myamoto',
      'date-of-birth': new Date(),
      address: {
        street: 'Samurai Way 12',
        postcode: 'SW123'
      },
      weapons: ['katana', 'tanto'],
      greet: function() {
        return 'Hello';
      }
    };
    expect(typeof samurai).toBe('object');
  });

  test('3 - shorthand syntax', function() {
    const name = 'Myamoto';
    const age = 32;
    const samurai = { name, age }; // shorthand syntax
    expect(samurai).toEqual({ name: 'Myamoto', age: 32 }); // full syntax (key, value)
  });

  test('4 - computed property names', function() {
    const propertyName = 'name';
    const name = 'Myamoto';
    const age = 32;
    const samurai = {
      [propertyName]: name,
      ['first' + propertyName]: 'firstName',
      age
    };
    expect(samurai).toEqual({
      name: 'Myamoto',
      firstname: 'firstName',
      age: 32
    });
  });
});
