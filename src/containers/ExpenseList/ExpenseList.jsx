import { List } from '../../components/List/List';
import { useSelector } from 'react-redux';

export const ExpenseList = () => {
  const expenseList = useSelector((store) => {
    return store.EXPENSE.expenseList;
  });
  return <List items={expenseList} />;
};
