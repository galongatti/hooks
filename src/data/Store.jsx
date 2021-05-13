import React, { createContext, useState } from "react";

const initialState = {
	number: 123,
	text: "Context API +  Hooks",
};

export const AppContext = createContext(initialState);

const Store = (props) => {
	const [state, setState] = useState(initialState);

	const updateState = (key, value) => {
		setState({
			...state,
			[key]: value,
		});
	};

	return (
		<AppContext.Provider
			value={{
				number: state.number,
				text: state.text,
				setNumber: (n) => updateState("number", n),
				setText: (t) => updateState("text", t),
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default Store;
