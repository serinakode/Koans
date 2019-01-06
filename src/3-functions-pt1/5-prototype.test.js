describe('prototype', function() {
  test('1 - should understand prototype', function() {
    const Person = function() {};
    Person.prototype = {
      name: 'default name'
    };
    const instance = new Person();
    expect(instance.name).toBe('default name');
    expect(Person.prototype.isPrototypeOf(instance)).toBe(true);
  });
  test('2 - should understand prototype', function() {
    const Person = function() {};
    const instance = new Person();
    Person.prototype = {
      name: 'default name'
    };
    expect(instance.name).toBe();
    expect(Person.prototype.isPrototypeOf(instance)).toBe(false);
  });
  test('3 - should understand prototype', function() {
    const Person = function() {};
    const firstInstance = new Person();
    expect(firstInstance.name).toBe();
    Person.prototype.name = 'before';
    const secondInstance = new Person();
    expect(firstInstance.name).toBe('before');
    expect(secondInstance.name).toBe('before');
    Person.prototype = {
      name: 'after'
    };
    const thirdInstance = new Person();
    expect(firstInstance.name).toBe('before');
    expect(secondInstance.name).toBe('before');
    expect(thirdInstance.name).toBe('after');
    Person.prototype.name = 'even more after';
    expect(firstInstance.name).toBe('before');
    expect(secondInstance.name).toBe('before');
    expect(thirdInstance.name).toBe('even more after');

    expect(Person.prototype.isPrototypeOf(firstInstance)).toBe(false);
    expect(Person.prototype.isPrototypeOf(secondInstance)).toBe(false);
    expect(Person.prototype.isPrototypeOf(thirdInstance)).toBe(true);
  });
  test('4 - should understand prototype & delete', function() {
    const Person = function() {};
    Person.prototype.name = 'default name';
    const instance = new Person();
    expect(instance.name).toBe('default name');
    delete Person.prototype.name;
    expect(instance.name).toBe();
  });
  test('5 - should understand prototype', function() {
    const Person = function() {};
    Person.prototype.name = 'default name';
    Person.prototype.address = {
      street: 'Kosovska 51',
      postcode: '11000'
    };
    const firstInstance = new Person();
    const secondInstance = new Person();
    firstInstance.name = 'new name';
    firstInstance.address.street = 'Kosovska 49';
    expect(secondInstance.name).toBe('default name');
    expect(secondInstance.address.street).toBe('Kosovska 49');
  });
  test('6 - should understand prototypes - angularjs scopes (Scope.prototype.$new)', function() {
    const parentScope = {
      name: 'default name',
      address: {
        street: 'Kosovska 51',
        postcode: '11000'
      }
    };
    const createChildScope = function(parentScope) {
      const ChildScopeConstructor = function() {};
      ChildScopeConstructor.prototype = parentScope;
      return new ChildScopeConstructor();
    };
    const childScope = createChildScope(parentScope);
    expect(parentScope.name).toBe('default name');
    expect(childScope.name).toBe('default name');
    childScope.name = 'new name';
    expect(parentScope.name).toBe('default name');
    expect(childScope.name).toBe('new name');
    expect(parentScope.address.street).toBe('Kosovska 51');
    expect(childScope.address.street).toBe('Kosovska 51');
    childScope.address.street = 'Kosovska 49';
    expect(parentScope.address.street).toBe('Kosovska 49');
    expect(childScope.address.street).toBe('Kosovska 49');
  });
});
