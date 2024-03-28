import { useContext } from "react";
import { expensesContext } from "../contexts/expensesContext";
import ExpenseItem from "./ExpenseItem";

export function ListComponent() {
	const response = useContext(expensesContext);
	if (!response.expenses || response.expenses.length === 0) {
		return <div>Loading...</div>;
	}

	const expenses = response.expenses.data;

	return (
		<div className="max-w-screen-md mx-auto py-5">
			<h1 className="text-3xl font-bold py-5">Expenses</h1>
			<div className="divide-y">
				{expenses.map((expense) => (
					<ExpenseItem key={expense.id} expense={expense} />
				))}
			</div>
		</div>
	);
}
