import { useContext, useState } from "react";
import { expensesContext } from "../contexts/expensesContext";
import axios from "axios";

export default function AddExpense() {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("🍔");
	const [isLoading, setIsLoading] = useState(false);
	const { setUpdate } = useContext(expensesContext);

	const submitHandler = (e) => {
		e.preventDefault();

		async function addExpense() {
			setIsLoading((p) => !p);
			try {
				const response = await axios.post(
					"https://expense-tracker-darzi-dc51536d1dce.herokuapp.com/api/data",
					{
						title,
						amount,
						logo: category,
					}
				);

				console.log(response);

				if (response.status === 200) {
					setTitle("");
					setAmount("");
					setUpdate((p) => p + 1);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading((p) => !p);
			}
		}

		addExpense();
	};

	return (
		<form onSubmit={submitHandler} className="py-5 flex flex-col gap-2">
			<label>Title</label>
			<input
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				type="text"
				placeholder="Title"
				className="border py-2 px-3 rounded-md"
			/>

			<label>Amount</label>
			<input
				onChange={(e) => setAmount(e.target.value)}
				value={amount}
				type="number"
				placeholder="Amount"
				className="border py-2 px-3 rounded-md"
			/>

			<label>Category</label>
			<select
				onChange={(e) => setCategory(e.target.value)}
				value={category}
				className="border py-2 px-3 rounded-md"
			>
				<option value="🍔">Food</option>
				<option value="🏠">Rent</option>
				<option value="🚗">Transportation</option>
				<option value="💡">Utilities</option>
				<option value="🏥">Insurance</option>
				<option value="⚕️">Medical & Healthcare</option>
			</select>

			<button
				disabled={isLoading}
				className="mt-2 border rounded-md py-2 px-4 bg-neutral-50 border-neutral-500 hover:bg-neutral-100 hover:border-neutral-900 max-w-48 disabled:opacity-75 active:scale-95 transition-transform duration-75 ease-in-out"
			>
				{isLoading ? "Submitting..." : "Submit"}
			</button>
		</form>
	);
}
