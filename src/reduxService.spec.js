import counterReducer, {
    changeResults,
    chargeResults,
    zeroResults
  } from './reduxService.js';
  
  describe('counter reducer', () => {
    const initialState = {
      value: 0,
      status: 'Loading...',
    };
    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
        value: 0,
        status: 'Loading...',
      });
    });
  
    it('should handle table response', () => {
      const actual = counterReducer(initialState, changeResults());
      expect(actual.value);
    });

    it('should handle table loading', () => {
      const actual = counterReducer(initialState, chargeResults());
      expect(actual.value);
    });

    it('should handle table no result', () => {
      const actual = counterReducer(initialState, zeroResults());
      expect(actual.value);
    });
  });