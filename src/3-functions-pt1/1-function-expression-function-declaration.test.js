describe('function expression and function declaration', function() {
  test('1 - should understand function expression', function() {
    expect(typeof f).toBe('undefined');
    var f = function() {
      return 123;
    };
    const g = f;
    expect(typeof f).toBe('function');
    expect(f()).toBe(123);
    expect(f === g).toBe(true);
  });
  test('2 - should understand function declaration', function() {
    expect(typeof f).toBe('function');
    function f() {
      return 123;
    }
    expect(typeof f).toBe('function');
    expect(f()).toBe(123);
  });
  test('3 - should understand function declaration', function() {
    let f;
    expect(typeof f).toBe('undefined');
    expect(typeof g).toBe('undefined');
    f = function g() {
      return 123;
    };
    expect(typeof f).toBe('function');
    expect(typeof g).toBe('undefined');
    expect(f()).toBe(123);
    let result;
    try {
      result = g();
    } catch (error) {
      result = 'error';
    }
    expect(result).toBe('error');
    if (typeof g !== 'undefined') {
      expect(f === g).toBe(true);
    }
  });
  test('4 - should understand function declaration', function() {
    let result = 1; // primitive value
    if (function f() {}) {
      result += typeof f;
    }
    expect(result).toBe('1undefined');
  });
  test('5 - should understand function expression and declaration', function() {
    const f = function factorial(number) {
      return number ? number * factorial(number - 1) : 1;
    };
    let result;
    try {
      result = f(3);
    } catch (error) {
      result = 'error';
    }
    expect(result).toBe(6);
    expect(typeof factorial).toBe('undefined');
  });
  test('6 - should understand the impact of anonymous functions on stack traces', function() {
    //uncomment the line below and run the test; check the call stack
    // debugger;
  });
  test('7 - should understand the impact of anonymous functions on stack traces', function noLongerAnonymousFunction() {
    //uncomment the line below and run the test; check the call stack; compare with previous one
    //debugger;
  });
});
