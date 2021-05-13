import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import DataContext from "../../data/DataContext";
import SectionTitle from "../../components/layout/SectionTitle";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
	const { state, setState } = useContext(DataContext);

	const addNumber = (n) => {
		setState({
			...state,
			number: state.number + n,
		});
	};

	const { number, setNumber, text, setText } = useContext(AppContext);

	useEffect(() => {
		if (number > 125) {
			setText("Caaarai!");
		}
	}, [number]);

	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
			/>

			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<span className="text">{state.text}</span>
				<span className="text">{state.number}</span>
				<button className="btn" onClick={() => addNumber(-1)}>
					-1
				</button>
				<button className="btn" onClick={() => addNumber(+1)}>
					+1
				</button>
			</div>

			<SectionTitle title="Exercicio #02" />
			<div className="center">
				<span className="text">{text}</span>
				<span className="text">{number}</span>
				<div>
					<button className="btn" onClick={() => setNumber(number - 1)}>
						-1
					</button>
					<button className="btn" onClick={() => setNumber(number + 1)}>
						+1
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseContext;
