import defaultSizes from './DefaultSizes';

describe('Test array of sizes', () => {
  test('check it is not empty', () => {
    const sizes = defaultSizes;
    expect(sizes).not.toBeNull();
    expect(sizes).toBeDefined();
    expect(Array.isArray(sizes)).toBeTruthy();
    expect(sizes.length).toBeGreaterThan(0);
    sizes.map(size => {
      expect(typeof size === 'number').toBeTruthy();
      expect(size).toBeGreaterThan(0);
      return true;
    });
  });
});
