const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { DATABASE_URL } = "$env.static.private;"; // Adjust according to your environment variable naming

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: DATABASE_URL,
		},
	},
});

app.get("/api/data", (req, res) => {
	prisma.expenses.findMany().then((data) => res.json(data));
});

app.post("/api/data", (req, res) => {
	const { title, amount, logo } = req.body;
	prisma.expenses
		.create({
			data: {
				title,
				amount: Number.parseFloat(amount),
				logo,
			},
		})
		.then((data) => res.json(data));
});

app.delete("/api/data/:id", (req, res) => {
	const id = Number.parseInt(req.params.id);
	console.log(id);
	prisma.expenses
		.delete({ where: { id } })
		.then((data) =>
			res.status(204).json({ msg: "Expense deleted successfully!", data })
		);
});

const port = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
