describe('Arrays - iteration methods', function() {
  test('0 - should understand filter', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(
      array.filter(function(element) {
        return element <= 3;
      })
    ).toEqual([1, 2, 3, 3, 2, 1]);
  });
  test('1 - should understand filter', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(
      array.filter(element => {
        return element <= 3;
      })
    ).toEqual([1, 2, 3, 3, 2, 1]);
  });

  test('2 - should understand filter with this', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const visited = {};
    expect(
      array.filter(function(element) {
        if (this[element]) {
          return false;
        }
        this[element] = true;
        return true;
      }, visited)
    ).toEqual([1, 2, 3, 4, 5]);
    expect(visited).toEqual({ 1: true, 2: true, 3: true, 4: true, 5: true });
  });
  test('3 - should understand forEach', function() {
    const array = [1, 2, 3, 4, 5];
    let result = 0;
    array.forEach(function(element) {
      result += element;
    });
    expect(result).toBe(15);
  });
  test('4 - should understand forEach with this', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    let result = 0;
    array.forEach(function(element) {
      if (!this[element]) {
        result += element;
      }
      this[element] = true;
    }, {});
    expect(result).toBe(15);
  });
  test('5 - should understand every', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.every((element, index) => element > index)).toEqual(true);
  });
  test('6 - should understand map', function() {
    const array = ['Myamoto', 'Hattori', 'Dave'];
    expect(array.map((element, index) => index + ' - ' + element)).toEqual([
      '0 - Myamoto',
      '1 - Hattori',
      '2 - Dave'
    ]);
  });
  test('7 - should understand some', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.some(element => element < 0)).toBe(false);
    array[2] = -array[2];
    expect(array.some(element => element < 0)).toBe(true);
  });
  test('8 - should understand reduce', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.reduce((acc, element) => acc * element, 1)).toBe(120);
  });
  test('9 - should understand reduceRight', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.reduceRight((acc, element) => acc * element, 1)).toBe(120);
  });
  test('10 - should understand map and reduce', function() {
    const result = new Array(10)
      .join(',.')
      .split(',')
      .map((_, index) => index)
      .reduce((acc, element) => acc + element * element, 0);
    expect(result).toBe(285);
  });
  test('11 - should understand map and parseInt', function() {
    const result = ['1', '2', '3'].map(parseInt);
    expect(result).toEqual([1, NaN, NaN]);
    //discuss with your pair
  });
});
