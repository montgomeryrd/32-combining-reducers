import * as actions from '../actions/category-actions';
require('jest');

describe('category-actions', () => {

    let category = {title: 'Werewolf Barmitzva'};
    let action = actions.categoryCreate(category);


    it('should create an action to add a category', () => {
        expect(action.type).toEqual('CATEGORY_CREATE');
        expect(action.payload).toHaveProperty('_id');
        expect(action.payload).toHaveProperty('timestamp');
    });
});