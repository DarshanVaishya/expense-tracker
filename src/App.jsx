import { ListComponent } from "./components/ListComponent";
import { ExpensesContext } from "./contexts/expensesContext";
import "./index.css";

function App() {
	return (
		<div className="bg-neutral-50 min-w-[100vw] min-h-[100vh]">
			<ExpensesContext>
				<ListComponent />
			</ExpensesContext>
		</div>
	);
}

export default App;
