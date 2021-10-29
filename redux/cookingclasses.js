import * as ActionTypes from './ActionTypes';

export const cookingclasses = (state = { isLoading: true,
                                    errMess: null,
                                    cookingclasses: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COOKINGCLASSES:
            return {...state, isLoading: false, errMess: null, cookingclasses: action.payload};

        case ActionTypes.COOKINGCLASSES_LOADING:
            return {...state, isLoading: true, errMess: null, cookingclasses: []}

        case ActionTypes.COOKINGCLASSES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};