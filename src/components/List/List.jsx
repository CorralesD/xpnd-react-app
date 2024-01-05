import { ListItem } from '../ListItem/ListItem';

export const List = ({ items }) => {
  return (
    <div style={{ overflowY: 'scroll', height: '40%' }}>
      <table className='table table-hover table-borderless'>
        <tbody>
          {items.map((item, index) => {
            return <ListItem item={item} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
