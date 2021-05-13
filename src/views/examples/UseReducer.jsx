import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../../store";
import { login, numberAdd2 } from "../../store/action";

const UseReducer = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [number, setNumber] = useState(0);

	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!"
			/>

			<div className="center">
				{state.other ? (
					<span className="text">{state.other}</span>
				) : (
					<span className="text">Sem Usuário</span>
				)}
				<span className="text">{state.number}</span>
				<div>
					<button
						className="btn"
						onClick={() => {
							login(dispatch, "Gabriel");
						}}
					>
						Login
					</button>
					<button
						className="btn"
						onClick={() => {
							numberAdd2(dispatch);
						}}
					>
						+2
					</button>
					<button
						className="btn"
						onClick={() => {
							dispatch({ type: "Add3Number" });
						}}
					>
						+3
					</button>
					<button
						className="btn"
						onClick={() => {
							dispatch({ type: "Multiplicar7Number" });
						}}
					>
						*7
					</button>
					<button
						className="btn"
						onClick={() => {
							dispatch({ type: "Dividir25Number" });
						}}
					>
						/25
					</button>
					<button
						className="btn"
						onClick={() => {
							dispatch({ type: "DoParse" });
						}}
					>
						Parse
					</button>

					<button
						className="btn"
						value={number}
						onClick={() => {
							dispatch({ type: "SomarN", payLoad: number });
						}}
					>
						+{number || 0}
					</button>
					<input
						className="input"
						type="number"
						name="valor"
						id="valor"
						value={number}
						onChange={(e) => {
							setNumber(parseFloat(e.target.value));
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default UseReducer;
