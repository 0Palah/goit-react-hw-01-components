import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export default function Transactions({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableThead}>
        <tr>
          <th className={css.tableTh}>TYPE</th>
          <th className={css.tableTh}>AMOUNT</th>
          <th className={css.tableTh}>CURRENCY</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableTr}>
            <td className={css.tableTd}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td className={css.tableTd}>{amount}</td>
            <td className={css.tableTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
