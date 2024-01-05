import s from './style.module.css';
import { useSelector } from 'react-redux';

export const ExpenseTotal = (props) => {
  const expenseList = useSelector((store) => {
    return store.EXPENSE.expenseList;
  });
  const income = useSelector((store) => {
    return store.EXPENSE.income;
  });
  const totalExpenses = expenseList.reduce((accumulator, expense) => {
    return Number.parseFloat(accumulator) + Number.parseFloat(expense.price);
  }, 0);
  const remainingMoney = income - totalExpenses;
  return (
    <div>
      <div className='row'>
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>$ {totalExpenses}</div>
      </div>
      <div className='row'>
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>$ {remainingMoney}</div>
      </div>
    </div>
  );
};
