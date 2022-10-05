import PropTypes from 'prop-types';
import { StatisticElem } from './StatisticElem';

export function Statistics({ data, titleText }) {
  return (
    <section className="statistics">
      {/* відмальовка за умовою */}
      {titleText && <h2 className="title">{titleText}</h2>}
      <ul className="stat-list">
        {data.map(elem => (
          <StatisticElem
            key={elem.id}
            title={elem.label}
            stats={elem.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
// { title: elem.lable, stats: elem.percentage, id: elem.id }
