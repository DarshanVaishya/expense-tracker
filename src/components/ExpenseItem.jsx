export default function ExpenseItem({ expense }) {
	return (
		<div className="p-2 my-2 flex gap-2 ">
			<p className="self-center text-3xl">{expense.logo}</p>
			<div className="flex flex-col flex-1">
				<p className="font-bold">{expense.title}</p>
				<p className="text-zinc-500">{expense.date}</p>
			</div>
			<p className="justify-right self-center text-red-500">
				-{expense.amount}$
			</p>
		</div>
	);
}
