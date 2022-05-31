const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
  evenOrOdd
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expect(sum(35267126,31268763)).toBe(66535889)
  });

  test('can add two negative numbers', () => {
    expect(sum(-1,-4)).toBe(-5)
  });

  test('can add zero', () => {
    expect(sum(0,2)).toBe(2)
  });

});

describe('subtract', () => { 
  
  test('can subtract two small positive numbers', () => {
    expect(subtract(3,2)).toBe(1);
  });

  test('can subtract 3 numbers from a number', () => { 
    expect(subtract(10,2,3,1)).toBe(4)
  });

  test('can subtract two negative numbers', () => {
    expect(subtract(-1,-4)).toBe(3)
  });

  test('can subtract zero', () => {
    expect(subtract(10,2,0,3)).toBe(5)
  });

});


describe('multiply', () => { 
  
  test('can multiply two small positive numbers', () => {
    expect(multiply(3,2)).toBe(6);
  });

  test('can multiply 4 numbers', () => { 
    expect(multiply(10,2,3,1)).toBe(60)
  });

  test('can multiply two negative numbers', () => {
    expect(multiply(-2,-4)).toBe(8)
  });

  test('can multiply zero', () => {
    expect(multiply(10,2,0,3)).toBe(0)
  });

});

describe('divide', () => {
  test('can divide two numbers', () => {
      expect(divide(10,2)).toBe(5);
  });

  test('can divide a number by 4 numbers', () => { 
    expect(divide(72,2,3,1,4)).toBe(3)
  });

  test('can divide two negative numbers', () => {
    expect(divide(-4,-2)).toBe(2)
  });

  test('can divide zero', () => {
    expect(divide(10,0)).toBe(Infinity)
  });

});

describe('modulus', () => {
  test('can find the remainder of two numbers', () => {
    expect(modulus(9,2)).toBe(1);
});

  test('can find the remainder two negative numbers', () => {
    expect(modulus(-4,-3)).toBe(-1)
});

  test('cannot find the remainder when dividing by zero', () => {
    expect(modulus(10,0)).toBeNaN
  });
});

describe('even', () => {
  test('returns true for even number', () => {
    expect(even(2)).toBe(true)
  })
  test('returns false for odd number', () => {
    expect(even(3)).toBe(false)
  })
});

describe('odd', () => {
  test('returns true for odd number', () => {
    expect(odd(3)).toBe(true)
  })
  test('returns false for even number', () => {
    expect(odd(4)).toBe(false)
  })
});

describe('evenOrOdd', () => {
  test('returns false for odd number when specifying even', () => {
    expect(evenOrOdd(3,"even")).toBe(false)
  })
  test('returns true for even number when specifying even', () => {
    expect(evenOrOdd(4,"even")).toBe(true)
  })
  test('returns false for odd number when specifying odd', () => {
    expect(evenOrOdd(6,"odd")).toBe(false)
  })
  test('returns true for even number when specifying odd', () => {
    expect(evenOrOdd(3,"odd")).toBe(true)
  })
  test('returns false for non-number', () => {
    expect(evenOrOdd("cat","odd")).toBe(false)
  })
  test('returns "Invalid parity argument" for bad parity argument', () => {
    expect(evenOrOdd(3,"cat")).toBe("Invalid parity argument")
  })
});

