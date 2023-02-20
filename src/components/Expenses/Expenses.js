import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filterYear, setfilteredYear] = useState('2023');
    const filterChangehandler = (selectedYear) => {
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;

    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangehandler} />
            <ExpensesChart expenses ={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>

    );
}

export default Expenses;