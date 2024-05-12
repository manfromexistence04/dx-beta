export let actions = [];
export const register = (action) => {
    actions = actions.concat(action);
    return action;
};
