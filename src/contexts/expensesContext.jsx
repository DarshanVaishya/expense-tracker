import { createContext, useEffect, useState } from "react";

export const expensesContext = createContext();

export function ExpensesContext({ children }) {
	const [expenses, setExpenses] = useState([]);
	const [update, setUpdate] = useState(0);

	useEffect(() => {
		async function fetchExpenses() {
			const response = await fetch(
				"https://expense-tracker-darzi-dc51536d1dce.herokuapp.com/api/data"
			);
			const data = await response.json();
			setExpenses(data);
		}

		fetchExpenses();
	}, [update]);

	return (
		<expensesContext.Provider value={{ expenses, setUpdate }}>
			{children}
		</expensesContext.Provider>
	);
}
