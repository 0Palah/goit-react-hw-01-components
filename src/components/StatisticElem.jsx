import PropTypes from 'prop-types';

export function StatisticElem({ title, stats }) {
  return (
    <li className="stat-item">
      <span className="stat-label">{title}</span>
      <span className="stat-percentage">{stats}%</span>;
    </li>
  );
}

StatisticElem.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number,
};
