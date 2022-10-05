import PropTypes from 'prop-types';
import css from './StatisticElem.module.css';

export function StatisticElem({ title, stats }) {
  return (
    <li className={css.statItem}>
      <span className={css.statLabel}>{title}</span>
      <span className={css.statPercentage}>{`${stats}%`}</span>
    </li>
  );
}

StatisticElem.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number,
};
