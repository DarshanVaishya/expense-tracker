import { useContext, useState } from "react";
import { expensesContext } from "../contexts/expensesContext";
import ExpenseItem from "./ExpenseItem";
import AddExpense from "./AddExpense";
import LoaderComponent from "./LoaderComponent";

function totalExpenses(expenses) {
	return expenses.reduce((acc, curr) => acc + Number.parseInt(curr.amount), 0);
}

export function ListComponent() {
	const [isActive, setIsActive] = useState(false);
	const { expenses } = useContext(expensesContext);
	return (
		<div className="max-w-screen-sm mx-auto py-5">
			<h1 className="text-3xl font-bold py-5">Expense Tracker</h1>
			<button
				onClick={() => setIsActive((p) => !p)}
				className="border py-2 px-4 bg-neutral-200 hover:bg-neutral-50 hover:border-neutral-500 active:scale-95 transition-transform duration-75 ease-in-out"
			>
				{isActive ? "Close" : "Add Expense"}
			</button>

			{isActive && <AddExpense />}

			<div className="my-5">
				<h2 className="text-2xl">
					Total Expenses:{" "}
					<span className="text-red-500">${totalExpenses(expenses)}</span>
				</h2>
			</div>
			<div className="divide-y">
				{expenses.length === 0 ? (
					<div className="flex justify-center">
						<LoaderComponent />
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
