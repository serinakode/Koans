describe('Arrays - accessor methods', function() {
  test('1 - should understand concat', function() {
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    expect(first.concat(second)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(first).toEqual([1, 2, 3]);
    expect(second).toEqual([4, 5, 6]);
  });

  // length 10 - join 9 / split 10
  test('2 - should understand join', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.join('-')).toBe('1-2-3-4-5');
  });
  test('3 - should understand join', function() {
    const array = new Array(10);
    expect(array.join('.-')).toBe('.-.-.-.-.-.-.-.-.-');
  });
  test('4 - should understand split', function() {
    expect('1-2-3-4-5-6-7-8-9-10'.split('-')).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10'
    ]);
  });
  test('5 - should understand split', function() {
    expect('.-.-.-.-.-.-.-.-.-.'.split('-')).toEqual([
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.'
    ]);
  });
  test('6 - should understand join and split', function() {
    expect(new Array(10).join('._').split('_')).toEqual([
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      ''
    ]);
  });
  test('7 - should understand slice', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.slice(1, 4)).toEqual([2, 3, 4]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
    expect(array.slice(1)).toEqual([2, 3, 4, 5]);
    expect(array.slice(1, -1)).toEqual([2, 3, 4]);
    expect(array.slice(-3, -1)).toEqual([3, 4]);
  });
  test('8 - should understand toString', function() {
    const array = [1, 3, 5, 'hello', 9];
    expect(array.toString()).toBe('1,3,5,hello,9');
  });
  test('9 - should understand indexOf', function() {
    const array = [1, 1, 3, 3, 5, 5, 7, 7];
    expect(array.indexOf(3)).toBe(2);
    expect(array.indexOf(2)).toBe(-1);
  });
  test('10 - should understand lastIndexOf', function() {
    const array = [1, 1, 3, 3, 5, 5, 7, 7];
    expect(array.lastIndexOf(3)).toBe(3);
    expect(array.lastIndexOf(2)).toBe(-1);
  });
});
