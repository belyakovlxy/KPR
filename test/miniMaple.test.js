import {MiniMaple} from "../src/miniMaple";

test('diff method test (normal1)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '4 * x ^ 3 - 2 * x + 3, x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('12 * x ^ 2 - 2');
});

test('diff method test (normal2)', () => {
    const mMaple = new MiniMaple();
    let someFunction = 'x ^ 3 - 2 * x + 3, x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('3 * x ^ 2 - 2');
});

test('diff method test (normal3)', () => {
    const mMaple = new MiniMaple();
    let someFunction = 'x ^ 2, x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('2 * x');
});

test('diff method test (different variable 1)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '4 * x ^ 3 - 2 * y ^ 3 + 3 * y, y';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('- 6 * y ^ 2 + 3');
});

test('diff method test (different variable 2)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '4 * x ^ 3 - 2 * x, y';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('');
});

test('diff method test (x case)', () => {
    const mMaple = new MiniMaple();
    let someFunction = 'x , x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('1');
});

test('diff method test (digit case)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '3, x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('');
});

test('diff method error test (empty input)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('Error! Empty input function.');
});

test('diff method error test (wrong input style)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '4 * x ^ 3  ';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('Error! Wrong input style (must be: \"function, diff variable\")');
});

test('diff method error test (non variable check)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '4 * x ^ 3 - 2 * x,   ';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('Error! Differentiable variable was missed.');
});

test('diff method error test (non function check)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '  , x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('Error! Function was missed.');
});

test('diff method error test (undefined operators)', () => {
    const mMaple = new MiniMaple();
    let someFunction = '4 * x ^ 3 - 2 / x, x';
    let diffedFunction = mMaple.diff(someFunction);
    expect(diffedFunction).toBe('Error! Undefined operator was used.');
});