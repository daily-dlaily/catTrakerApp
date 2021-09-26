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
        case "REMOVE_CAT": {
            console.log("A cat was removed...");
            return state;
          }
          case "REMOVE_CAT_ERR": {
            console.log("A cat remove error occured....");
            return state;
          }
          case "TOGGLE_CHECKED": {
            toast.info("A cat vaccination status changed...");
            return state;
          }
          case "TOGGLE_CHECKED_ERR": {
            toast.error("A cat vaccination status change error occured...");
            return state;
          }
        default: 
            return state;
    }
};
export default catReducer;