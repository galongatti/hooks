export function login(dispatch, name) {
	dispatch({ type: "Login", payLoad: name });
}
