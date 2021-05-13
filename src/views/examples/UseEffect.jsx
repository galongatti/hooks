import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
	const n = parseInt(num);
	if (n < 0) return -1;
	if (n === 0) return 1;
	return calcFatorial(n - 1) * n;
}

function calcPar(num) {
	const n = parseFloat(num);
	if (n === 0) return -1;
	return num % 2 === 0;
}

const UseEffect = (props) => {
	const [number, setNumber] = useState(1);
	const [fatorial, setFatorial] = useState(1);
	const [valor, setValor] = useState(1);
	const [resultado, setResultado] = useState();

	useEffect(
		function () {
			setFatorial(calcFatorial(number));
		},
		[number]
	);

	useEffect(
		function () {
			setResultado(calcPar(valor));
		},
		[valor]
	);

	return (
		<div className="UseEffect">
			<PageTitle
				title="Hook UseEffect"
				subtitle="Permite executar efeitos colaterais em componentes funcionais!"
			/>

			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<div>
					<span className="text">Fatorial: </span>
					<span className="text red">
						{fatorial === -1 ? "Não existe" : fatorial}
					</span>
				</div>

				<input
					type="number"
					className="input"
					value={number}
					onChange={(e) => {
						setNumber(e.target.value);
					}}
				/>
			</div>
			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<div>
					<span className="text">Resultado: </span>
					<span className="text red">
						{resultado === -1
							? "Não existe"
							: resultado
							? "Par"
							: "Impar"}
					</span>
				</div>
				<input
					type="number"
					className="input"
					value={valor}
					onChange={(e) => {
						setValor(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default UseEffect;
