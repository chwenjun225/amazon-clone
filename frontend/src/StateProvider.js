import React, {createContext, useContext, useReducer} from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the dataLayer
export const StateProvider = ({reducer, initialState, children}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
