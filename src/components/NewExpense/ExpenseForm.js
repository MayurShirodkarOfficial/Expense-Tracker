import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [inputTitle, setinputTitle] = useState('');
    const [amount, setamount] = useState('');
    const [date, setdate] = useState('');

    // const [userInput,setuserInput] = useState({
    //     inputTitle:'',
    //     amount:'',
    //     date:''
    // });
    const titleChangeHandler = (event)=> {
        setinputTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     inputTitle:event.target.value
        // });
        //this guarantees that state prevState will have most recent state snapshot
        // setuserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         inputTitle:event.target.value
        //     }
        // });
        
    }
    const amountChangeHandler =(event) =>{
        // setuserInput({
        //     ...userInput,
        //     amount:event.target.value
        // });
        setamount(event.target.value);
       
    }
    const dateChangeHandler =(event) =>{
        // setuserInput({
        //     ...userInput,
        //     date:event.target.value
        // });
        setdate(event.target.value);
        
    }

    const submitHandler =(event)=>{
        event.preventDefault();
        const expenseData ={
            title:inputTitle,
            amount:+amount,
            date:new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        setinputTitle('');
        setamount('');
        setdate('');
    }

    
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">

            <label>Title</label>
            <input type="text" value ={inputTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">

            <label>Amount</label>
            <input type="number" min="0.1" step="0.1" value ={amount} onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">

            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-02-20" value ={date} onChange={dateChangeHandler}/>
            </div>

            
        </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
    </form>
  )
}

export default ExpenseForm