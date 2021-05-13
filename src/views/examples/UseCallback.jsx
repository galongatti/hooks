import React, { useState, useCallback } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallBackButtons from "./UseCallBackButtons";

const UseCallback = (props) => {
	const [count, setCount] = useState(0);

	const inc = useCallback(
		(delta) => {
			setCount((curr) => curr + delta);
		},
		[setCount]
	);

	return (
		<div className="UseCallback">
			<PageTitle
				title="Hook UseCallback"
				subtitle="Retorna uma função memoizada!"
			/>
			<span className="text">{count}</span>
			<UseCallBackButtons inc={inc} />
		</div>
	);
};

export default UseCallback;
