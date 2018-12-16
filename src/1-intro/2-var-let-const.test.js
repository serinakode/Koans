// VAR based variables are function scoped. We can redefine a variable and reassign a variable.
// LET & CONST are blocked scope which does include functions. LET can only reassign a variable. CONST can't do any of them.

describe('var, let & const', function() {
  test('should understand var', function() {
    var a = 1;
    expect(a).toBe(1);
    if (a) {
      var a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(2);
  });
  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(1);
    if (a) {
      let a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(1);
  });
  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(1);
    if (a) {
      const a = 2;
      expect(a).toBe(2);
    }
    expect(a).toBe(1);
  });
  test('should understand let', function() {
    let a = 1;
    expect(a).toBe(1);
    a = 2;
    expect(a).toBe(2);
  });
  test('should understand const', function() {
    const a = 1;
    expect(a).toBe(1);
    try {
      // a = 2;
    } catch (e) {
      //empty
    }
    expect(a).toBe(1);
  });

  test('should understand const', function() {
    const a = { name: 'Myamoto' };
    a.name = 'Hattori';
    expect(a).toEqual({ name: 'Hattori' });
  });

  // modifying it, so the result is different in that case.
});
