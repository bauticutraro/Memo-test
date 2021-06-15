import { boardItems } from '../src/utils/boardItems';

describe('board items', () => {
  test('should be 20 items', () => {
    expect(boardItems?.length).toBe(20);
  });
});
