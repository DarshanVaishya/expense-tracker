import { ListComponent } from "./components/ListComponent";
import { ExpensesContext } from "./contexts/expensesContext";
import "./index.css";

function App() {
	return (
		<ExpensesContext>
			<ListComponent />
		</ExpensesContext>
	);
}

export default App;
