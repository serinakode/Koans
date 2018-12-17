// prettier-ignore
describe('Retrieving properties', function() {
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
  test('1 - should know how to use . and [] operators to retrieve property values', function() {
    expect(samurai.name).toBe('Myamoto');
    expect(samurai['n' + 'a' + 'm' + 'e']).toBe('Myamoto');
  });
  test('2 - should know that property names are case-sensitive', function() {
    expect(samurai.Name).toBe();
  });

  //samuri.name = samurai[name] but samurai.'name' doesn't make sense, so the output is nothing.
  test('3 - should know how to use variable property name', function() {
    const propertyName = 'name';
    expect(samurai.propertyName).toBe();
    expect(samurai[propertyName]).toBe('Myamoto');
  });
  test('4 - should know default operator ||', function() {
    samurai.title = '';
    expect(samurai.address.city || 'unknown city').toBe('unknown city');
    expect(samurai.address.postcode || 'unknown postcode').toBe('18+');
    expect(samurai.title || 'Mr.').toBe('Mr.');
  });
  test('5 - should know guard operator &&', function() {
    let samurai2;
    const samurai3 = {
      address: {
        postcode: '18+'
      }
    };
    expect(samurai && samurai.address && samurai.address.street).toBe('Samurai Way');
    expect(samurai2 && samurai2.address && samurai2.address.street).toBe();
    expect(samurai3 && samurai3.address && samurai3.address.street).toBe();
  });
  test('6 - should know how to combine default and guard operators', function() {
    let samurai2;
    const samurai3 = {
      address: {
        postcode: '18+'
      }
    };
    expect(samurai && samurai.address && samurai.address.street || 'N/A').toBe('Samurai Way');
    expect(samurai2 && samurai2.address && samurai2.address.street || 'N/A').toBe('N/A');
    expect(samurai3 && samurai3.address && samurai3.address.street || 'N/A').toBe('N/A');
  });
  test('7 - should understand hasOwnProperty', function() {
    expect(samurai.hasOwnProperty('name')).toBe(true);
    expect(samurai.toString === undefined).toBe(false);
    expect(samurai.hasOwnProperty('toString')).toBe(false);
  });

  // 'name' is enumerable?' 
  test('8 - should understand propertyIsEnumerable', function() {
    expect(samurai.propertyIsEnumerable('name')).toBe(true);
    expect(samurai.propertyIsEnumerable('toString')).toBe(false);
  });
});
