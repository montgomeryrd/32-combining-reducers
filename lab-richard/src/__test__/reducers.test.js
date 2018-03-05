import reducer from '../reducers/category';
require('jest');

describe('category reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('should handle CATEGORY_CREATE', () => {
        let one = { _id: '123', title: 'hello', timestamp: new Date() };
        let state = reducer([one], {
            type: 'CATEGORY_CREATE',
            payload: one,
        });
        expect(state).toContain(one);
    });
    
    it('should handle CATEGORY_UPDATE', () => {
        let two = { _id: '321', title: 'world', timestamp: new Date() };
        let state = reducer([two], {
            type: 'CATEGPRY_UPDATE',
            payload: two,
        });
        expect(state).toContain(two);
    });
    
    it('should handle CATEGORY_DELETE', () => {
        let three = {title: '!'};
        let state = reducer([three], {
            type: 'CATEGPRY_DELETE',
            payload: three,
        });
    
        expect(state).toContain(three);
    });
});