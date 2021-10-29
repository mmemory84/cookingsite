import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchCookingclasses = () => dispatch => {

    dispatch(cookingclassesLoading());

    return fetch(baseUrl + 'cookingclasses')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(cookingclasses => dispatch(addCookingclasses(cookingclasses)))
        .catch(error => dispatch(cookingclassesFailed(error.message)));
};

export const cookingclassesLoading = () => ({
    type: ActionTypes.COOKINGCLASSES_LOADING
});

export const cookingclassesFailed = errMess => ({
    type: ActionTypes.COOKINGCLASSES_FAILED,
    payload: errMess
});

export const addCookingclasses = cookingclasses => ({
    type: ActionTypes.ADD_COOKINGCLASSES,
    payload: cookingclasses
});



export const fetchRecipes = () => dispatch => {
    
    dispatch(recipesLoading());

    return fetch(baseUrl + 'recipes')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(recipes => dispatch(addRecipes(recipes)))
        .catch(error => dispatch(recipesFailed(error.message)));
};

export const recipesLoading = () => ({
    type: ActionTypes.RECIPES_LOADING
});

export const recipesFailed = errMess => ({
    type: ActionTypes.RECIPES_FAILED,
    payload: errMess
});

export const addRecipes = recipes => ({
    type: ActionTypes.ADD_RECIPES,
    payload: recipes
});

