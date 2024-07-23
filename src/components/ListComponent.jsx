import { useContext, useState } from "react";
import { expensesContext } from "../contexts/expensesContext";
import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";

function totalExpenses(expenses) {
	if (!expenses) return 0;
	return expenses.reduce(
		(acc, curr) => acc + Number.parseFloat(curr.amount),
		0
	);
}

export function ListComponent() {
	const [isActive, setIsActive] = useState(false);
	const { expenses } = useContext(expensesContext);
	return (
		<div className="max-w-screen-sm mx-auto py-5">
			<h1 className="text-3xl font-bold py-5">Expense Tracker</h1>
			<button
				onClick={() => setIsActive((p) => !p)}
				className="border rounded-md py-2 px-4 bg-neutral-50 border-neutral-500 hover:bg-neutral-100 hover:border-neutral-900 active:scale-95 transition-transform duration-75 ease-in-out"
			>
				{isActive ? "Close" : "Add Expense"}
			</button>

			{isActive && <AddExpense />}

			<div className="my-5 text-center">
				<h2 className="text-2xl">
					Total Expenses:
					<p className="text-red-500 text-5xl mt-2">
						${totalExpenses(expenses)}
					</p>
				</h2>
			</div>
			<div className="divide-y">
				{expenses.length === 0 ? (
					<div className="flex justify-center">
						<p className="text-2xl">No expenses yet.</p>
					</div>
				) : (
					expenses.map((expense) => (
						<ExpenseItem key={expense.id} expense={expense} />
					))
				)}
			</div>
		</div>
	);
}
