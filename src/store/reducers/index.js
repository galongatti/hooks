function reducer(state, action) {
	switch (action.type) {
		case "Add2Number":
			return { ...state, number: state.number + 2 };
		case "Add3Number":
			return { ...state, number: state.number + 3 };
		case "Multiplicar7Number":
			return { ...state, number: state.number * 7 };
		case "Dividir25Number":
			return { ...state, number: state.number / 25 };
		case "DoParse":
			return { ...state, number: parseInt(state.number) };
		case "SomarN":
			console.log("action.payLoad", action.payLoad);
			return { ...state, number: state.number + action.payLoad };
		case "Login":
			return { ...state, other: action.payLoad };
		default:
			return state;
	}
}

export default reducer;
