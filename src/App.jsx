import { IncomeInput } from './containers/IncomeInput/IncomeInput';
import { ExpenseInput } from './containers/ExpenseInput/ExpenseInput';
import { ExpenseList } from './containers/ExpenseList/ExpenseList';
import s from './style.module.css';
import { ExpenseTotal } from './components/ExpenseTotal/ExpenseTotal';
import { Logo } from './components/Logo/Logo';

export function App() {
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title='XPND' subtitle='Track your expenses' />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <ExpenseList />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal totalExpense={1000} remainingMoney={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
