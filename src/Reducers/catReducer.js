import { toast } from "react-toastify";

const initialState = {}


const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CAT": {
            toast.success("New cat Added");
            return state;
        }
        case "ADD_CAT_ERR": {
            toast.error("An error occurred");
            return state;
        }
        default: 
            return state;
    }
};
export default catReducer;