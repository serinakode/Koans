describe('function parameters', function() {
  test('1 - should understand function length', function() {
    const f = function(first, second) {
      return second;
    };
    expect(f.length).toBe(2);
  });
  test('2 - should understand how parameters are passed in javascript', function() {
    const inc = function(first, second) {
      return first + (second || 1);
    };
    expect(inc(100, 23)).toBe(123);
    expect(inc(100)).toBe(101);
    // for bonus points - can you think of a case when inc would behave in an unexpected way?
    // if yes - write a test to prove it, and then fix the problem.
  });
  test('3 - should understand implicit parameter "arguments"', function() {
    const dec = function() {
      return arguments[0] - (arguments[1] || 1);
    };
    expect(dec(123, 23)).toBe(100);
    expect(dec(101)).toBe(100);
  });
  test('4 - should understand implicit parameter "arguments"', function() {
    const f = function(first, second, third) {
      arguments[2] = 4;
      return first + second + third;
    };
    expect(f(1, 2, 3)).toBe(7);
  });
  test('5 - should understand implicit parameter "arguments"', function() {
    const typeOfArguments = function() {
      return typeof arguments;
    };
    expect(typeOfArguments(1, 2, 3)).toBe('object');
  });
  test('6 - should understand arguments', function() {
    let result;
    const f = function() {
      if (arguments.length === 1) {
        return;
      } else if (arguments.length === 2) {
        return;
      }
      throw 'incorrect number of parameters';
    };
    expect(f(3)).toBe(result);
    expect(f(2, 3)).toBe(result);
    try {
      result = f(2, 3, undefined);
    } catch (error) {
      result = 'error';
    }
    expect(result).toBe('error');
  });

  test('8 - should understand arguments & fat-arrow functions', function() {
    const outer = function() {
      const getArguments = () => {
        return arguments;
      };

      expect(getArguments(1, 2)).toEqual(arguments);
    };

    outer(1, 2);
  });

  test('9 - should understand default parameters', function() {
    const add = (a, b = 1) => a + b;
    expect(add(2, 3)).toBe(5);
    expect(add(2)).toBe(3);
  });
  test('10 - should understand rest operator (...)', function() {
    const join = function(delimiter, ...args) {
      return args.join(delimiter);
    };
    expect(join('.', 192, 168, 0, 1)).toBe('192.168.0.1');
  });
});
