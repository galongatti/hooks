import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
	const [valor1, setValor1] = useState("");
	const [valor2, setValor2] = useState("");
	const count = useRef(0);
	const myInput1 = useRef(null);
	const myInput2 = useRef(null);

	useEffect(
		function () {
			count.current++;
			myInput2.current.focus();
		},
		[valor1]
	);

	useEffect(
		function () {
			count.current++;
			myInput1.current.focus();
		},
		[valor2]
	);

	return (
		<div className="UseRef">
			<PageTitle
				title="Hook UseRef"
				subtitle="Retorna um objeto mutável com a propriedade .current!"
			/>

			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<div>
					<span className="text">Valor:</span>
					<span className="text">{} [</span>
					<span className="text red">{count.current}</span>
					<span className="text">]</span>
				</div>

				<input
					type="text"
					value={valor1}
					className="input"
					ref={myInput1}
					onChange={(e) => {
						setValor1(e.target.value);
					}}
				/>
			</div>
			<SectionTitle title="Exercicio #02" />
			<div className="center">
				<input
					type="text"
					value={valor2}
					ref={myInput2}
					onChange={(e) => setValor2(e.target.value)}
					className="input"
				/>
			</div>
		</div>
	);
};

export default UseRef;
