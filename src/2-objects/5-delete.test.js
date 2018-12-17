describe('Delete', function() {
  let samurai;
  beforeEach(function() {
    samurai = {
      name: 'Myamoto',
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      }
    };
  });
  test('1 - should understand delete operator', function() {
    const result = delete samurai.name;
    expect(result).toBe(true);
    expect(samurai.name).toBe();
  });
  test('2 - should understand delete operator vs. setting property value to undefined', function() {
    const object = {
      propertyName: 'propertyValue'
    };
    let properties = '';
    object.propertyName = undefined;
    expect(object.propertyName).toBe(undefined);
    for (const name in object) {
      properties += name;
    }
    expect(properties).toBe('propertyName');

    properties = '';
    delete object.propertyName;
    expect(object.propertyName).toBe(undefined);
    for (const name in object) {
      properties += name;
    }
    expect(properties).toBe('');
    //Discuss this with your pair
    //Imagine using object as a read through cache - how would you manage the size of the cache?
  });
  test('3 - should understand delete operator', function() {
    samurai.samurai = samurai;
    delete samurai.samurai.samurai;
    expect(samurai.samurai).toBe(undefined);
  });
  test('4 - should understand delete operator', function() {
    samurai.samurai = samurai;
    delete samurai.samurai.name;
    expect(samurai.name).toBe(undefined);
  });
});
