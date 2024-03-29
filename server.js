const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const expenses = [
	{
		id: 2,
		date: "2020-01-02",
		title: "Food",
		amount: 50,
		logo: "🍔",
	},
	{
		id: 1,
		date: "2020-01-01",
		title: "Rent",
		amount: 1000,
		logo: "🏠",
	},
];

app.get("/api/data", (req, res) => {
	if (!expenses || Object.keys(expenses).length === 0) {
		res.status(404).send({ msg: "No expenses found" });
	}

	res.send({
		data: expenses,
		msg: "Expenses sent successfully",
	});
});

app.post("/api/data", (req, res) => {
	const { date, title, amount, logo } = req.body;
	if (!date || !title || !amount || !logo) {
		res.status(400).send({ msg: "Please fill all fields" });
		return;
	}

	const id = expenses.length + 1;

	expenses.unshift({ id, date, title, amount, logo });
	res.status(200).send({ msg: "Expense added successfully" });
});

app.listen(8080, () => {
	console.log("Server is running on port 8080");
});
