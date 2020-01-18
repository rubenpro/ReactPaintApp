import defaultColors from './DefaultColors';

describe('Test array of colors', () => {
  test('check it is not empty', () => {
    const colors = defaultColors;
    expect(colors).not.toBeNull();
    expect(colors).toBeDefined();
    expect(Array.isArray(colors)).toBeTruthy();
    expect(colors.length).toBeGreaterThan(0);
    colors.map(color => {
      expect(typeof color === 'string').toBeTruthy();
      // test to match begin with # for HEX colors
      // test for length = 7 for HEX colors
      // test to accept basic colors (red, blue, green...) instead
      return true;
    });
  });
});
