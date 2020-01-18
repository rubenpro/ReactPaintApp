describe('FormatGrid test', () => {
  test('function receives a number?', () => {
    const params = 5;
    expect(params).not.toBeNull();
    expect(params).toBeDefined();
    expect(typeof params === 'number').toBeTruthy();
    expect(params).toBeGreaterThan(0);
    // how to test function param ?
  });
});
