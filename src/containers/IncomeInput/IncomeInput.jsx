import { setIncomeAction } from '../../store/expense/expense-slice';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const IncomeInput = () => {
  const income = useSelector((store) => {
    return store.EXPENSE.income;
  });
  const dispatch = useDispatch();
  const setIncome = (e) => {
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
  };

  return (
    <div className='row justify-content-center mb-2'>
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className='col-6'>
        <input
          defaultValue={income}
          type='number'
          className='form-control'
          placeholder='Ex: 3000'
          onChange={setIncome}
        />
      </div>
    </div>
  );
};
