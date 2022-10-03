import PropTypes from 'prop-types';

export function StatisticElem({ title, stats }) {
  return (
    <>
      <span className="label">{title}</span>
      <span className="percentage">{stats}%</span>;
    </>
  );
}

StatisticElem.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number,
};
