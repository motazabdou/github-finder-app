import React, {createContext, useReducer} from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);

    //function to set Alert
    const setAlert = (message, type) => {
        dispatch({
            type: "SET_ALERT",
            payload: {
                message: message, 
                type: type
            }
        })

        // need message alert to go away after a few seconds
        setTimeout(() => {
            dispatch({
                type: "REMOVE_ALERT"
            })
        }, 3000);
    }

    return (
        <AlertContext.Provider value={{alert: state, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;