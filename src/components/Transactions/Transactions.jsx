import PropTypes from 'prop-types';

export default function Transactions({ transactions }) {
  return (
    <table className="transaction-history">
      <thead className="table-thead">
        <tr>
          <th className="table-th">Type</th>
          <th className="table-th">Amount</th>
          <th className="table-th">Currency</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className="table-td">{type}</td>
            <td className="table-td">{amount}</td>
            <td className="table-td">{currency}</td>
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
