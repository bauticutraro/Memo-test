import { boardItems } from '../src/utils/boardItems';
import { compareItems } from '../src/utils/compareItems';

describe('board items', () => {
  test('should be 20 items', () => {
    expect(boardItems?.length).toBe(20);
  });
});
describe('board items comparison', () => {
  test('should be eqaul', () => {
    const compareItemsResult = compareItems([
      { id: 1, src: '' },
      { id: 1, src: '' }
    ]);

    expect(compareItemsResult).toBeTruthy();
  });

  test('should be not equal', () => {
    const compareItemsResult = compareItems([
      { id: 1, src: '' },
      { id: 2, src: '' }
    ]);

    expect(compareItemsResult).toBeFalsy();
  });

  test('should be an array of 2 elements', () => {
    const compareItemsResult = compareItems('another type of data');
    const compareItemsResultArray = compareItems([{ id: 1 }]);

    expect(compareItemsResult).toBeNull();
    expect(compareItemsResultArray).toBeNull();
  });

  test('should be an array of 2 elements of objects with id key', () => {
    const compareItemsResult = compareItems([{ otherKey: 1 }, { otherKey: 1 }]);

    expect(compareItemsResult).toBeNull();
  });
});
