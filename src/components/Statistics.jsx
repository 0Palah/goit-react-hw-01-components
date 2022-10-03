import PropTypes from 'prop-types';
import { StatisticElem } from './StatisticElem';

export function Statistics({ data }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map(elem => (
          <li className="item" key={elem.id}>
            <StatisticElem title={elem.label} stats={elem.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
// { title: elem.lable, stats: elem.percentage, id: elem.id }
