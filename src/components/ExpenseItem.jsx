import axios from "axios";
import { useContext } from "react";
import { expensesContext } from "../contexts/expensesContext";

export default function ExpenseItem({ expense }) {
	const { setUpdate } = useContext(expensesContext);

	const deleteHandler = () => {
		async function handleDelete() {
			try {
				const response = await axios.delete(
					`https://expense-tracker-darzi-dc51536d1dce.herokuapp.com/api/data/${expense.id}`
				);
				console.log(response);

				if (response.status === 204) setUpdate((p) => p + 1);
			} catch (error) {
				console.error(error);
			}
		}

		handleDelete();
	};

	return (
		<div className="py-2 my-2 px-4 flex gap-2 rounded group hover:bg-neutral-100">
			<p className="self-center text-3xl">{expense.logo}</p>
			<div className="flex flex-col flex-1">
				<p className="font-bold">{expense.title}</p>
				<p className="text-zinc-500">
					{new Date(expense.date).toLocaleDateString()}
				</p>
			</div>

			<button
				onClick={deleteHandler}
				className="hidden group-hover:block text-center p-2"
			>
				&#10006;
			</button>
			<p className="self-center text-red-500">-{expense.amount}$</p>
		</div>
	);
}
