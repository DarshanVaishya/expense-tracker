const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const expenses = [
	{
		id: 1,
		date: "2020-01-01",
		title: "Rent",
		amount: 1000,
		logo: "🏠",
	},
  {
    id: 2,
    date: "2020-01-02",
    title: "Food",
    amount: 50,
    logo: "🍔",
  }
];

const categories = {
	Food: "🍔",
	Rent: "🏠",
	Transportation: "🚗",
	Utilities: "💡",
	Insurance: "🏥",
	"Medical & Healthcare": "⚕️",
};

app.get("/api/data", (req, res) => {
	if (!expenses || Object.keys(expenses).length === 0) {
		res.status(404).send({ msg: "No expenses found" });
	}

	res.send({
		data: expenses,
		msg: "Expenses sent successfully",
	});
});

app.listen(8080, () => {
	console.log("Server is running on port 8080");
});
