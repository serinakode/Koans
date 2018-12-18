describe('Arrays - basics', function() {
  let array;
  beforeEach(() => (array = [1, 2, 3]));
  test('1 - should understand array literals', function() {
    const array = [1, '2', [3], false];
    expect(Array.isArray(array)).toBe(true);
    expect(Array.isArray(array[0])).toBe(false);
    expect(Array.isArray(array[1])).toBe(false);
    expect(Array.isArray(array[2])).toBe(true);
    expect(Array.isArray(array[3])).toBe(false);
    const returnArguments = function() {
      return arguments;
    };
    const args = returnArguments(1, 2, 3);
    expect(Array.isArray(args)).toBe(false);
  });
  test('2 - should understand Array.from', function() {
    const array = [1, 2, 3];
    expect(Array.from(array)).toEqual([1, 2, 3]);
    expect(Array.from('Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
    expect(Array.from({ length: 10 }, (_, i) => i)).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });
  test('2 - arguments recap', function() {
    const returnArguments = function() {
      return arguments;
    };
    const args = returnArguments(1, 2, 3);
    expect(args[0]).toEqual(1);
    expect(args[1]).toEqual(2);
    expect(args[2]).toEqual(3);
    expect(args.length).toEqual(3);
    expect(Array.isArray(args)).toBe(false);
  });
  test('3 - should understand [] operator', function() {
    expect(array[1]).toBe(2);
    expect(array[3]).toBe();
  });
  test('4 - should understand [] operator', function() {
    array[3] = 4;
    expect(array[3]).toBe(4);
  });
  test('5 - should understand length property', function() {
    expect(array.length).toBe(3);
    array[2] = undefined;
    expect(array.length).toBe(3);
    array[99] = 100;
    expect(array.length).toBe(100);
    array[200] = undefined;
    expect(array.length).toBe(201);
  });
  test('6 - should understand length property', function() {
    const array = [1, , , , 5, , , ,];
    expect(array.length).toBe(8);
  });
  test('7 - should understand delete operator', function() {
    delete array[1];
    expect(array[1]).toBe();
    expect(array.length).toBe(3);
  });
  // remain as undefined
  test('8 - should understand delete operator', function() {
    delete array[2];
    expect(array.length).toBe(3);
  });

  test('9 - should understand how for and for..in loops are used for iteration', function() {
    const array = [];
    array[1000] = 1000;
    let iterationsFor = 0;
    for (let i = array.length - 1; i >= 0; i -= 1) {
      iterationsFor += 1;
    }
    let iterationsForIn = 0;
    for (const name in array) {
      iterationsForIn += 1;
    }
    expect(iterationsFor).toBe(1001);
    expect(iterationsForIn).toBe(1);
  });
});
