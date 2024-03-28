export default function ExpenseItem({ expense }) {
	return (
		<div className="bg-">
			<span>{expense.logo}</span> <span>{expense.title}</span>{" "}
			<span>{expense.amount}</span>
			<p>{expense.date}</p>
		</div>
	);
}
