export default (state={}, action) => {

    let {type, payload} = action;
    let changedState, categoryId, categoryExpenses, updatedExpenses;
  
    switch(type) {
    case 'CATEGORY_CREATE': return {...state, [payload._id]: []};
    
    case 'CATEGORY_DELETE': 
        changedState = {...state};
        delete changedState[payload._id];
        return changedState;

    case 'EXPENSE_CREATE': 
        categoryId = payload.categoryId;
        categoryExpenses = state[categoryId];
        updatedExpenses = [...categoryExpenses, payload];
        return {...state, [categoryId] : updatedExpenses};

    case 'EXPENSE_UPDATE': 
        categoryId = payload.categoryId;
        categoryExpenses = state[categoryId];
        updatedExpenses = categoryExpenses.map(expenses => expenses._id === payload._id ? payload : expenses);
        return {...state, [categoryId] : updatedExpenses};

    case 'EXPENSE_DELETE': 
        categoryId = payload.categoryId;
        categoryExpenses = state[categoryId];
        updatedExpenses = categoryExpenses.filter(expenses => expenses._id !== payload._id);
        return {...state, [categoryId]: updatedExpenses};

    case 'EXPENSE_RESET': return {};

    default: return state;
    }
};