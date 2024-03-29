import { useContext, useState } from "react";
import { expensesContext } from "../contexts/expensesContext";
import axios from "axios";

export default function AddExpense() {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("");
	const { setUpdate } = useContext(expensesContext);

	const submitHandler = (e) => {
		e.preventDefault();

		async function addExpense() {
			try {
				const response = await axios.post("http://localhost:8080/api/data", {
					title,
					amount: amount.toString(),
					logo: category,
					date: new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString(),
				});

				if (response.status === 200) {
					setTitle("");
					setAmount("");
					setUpdate((p) => p + 1);
				}
			} catch (error) {
				console.error(error);
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
				className="border py-2 px-3"
			/>

			<label>Amount</label>
			<input
				onChange={(e) => setAmount(e.target.value)}
				value={amount}
				type="number"
				placeholder="Amount"
				className="border py-2 px-3"
			/>

			<label>Category</label>
			<select
				onChange={(e) => setCategory(e.target.value)}
				value={category}
				className="border py-2 px-3"
			>
				<option value="🍔">Food</option>
				<option value="🏠">Rent</option>
				<option value="🚗">Transportation</option>
				<option value="💡">Utilities</option>
				<option value="🏥">Insurance</option>
				<option value="⚕️">Medical & Healthcare</option>
			</select>

			<button className="mt-2 border py-2 px-4 bg-neutral-200 hover:bg-neutral-50 hover:border-neutral-500 max-w-48">
				Submit
			</button>
		</form>
	);
}
