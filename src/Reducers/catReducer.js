const catReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_CAT": {
            console.log("Added a cat")
            return state;
        }
        case "ADD_CAT_ERR": {
            console.log("An error occured")
            return state;
        }
        default: return state;
    }
}
export default catReducer;