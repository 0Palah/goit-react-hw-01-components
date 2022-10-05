import PropTypes from 'prop-types';
import { StatisticElem } from '../StatisticElem/StatisticElem';
import css from './Statistics.module.css';

export function Statistics({ data, titleText }) {
  return (
    <section className={css.statistics}>
      {/* відмальовка за умовою */}
      {titleText && <h2 className={css.title}>{titleText.toUpperCase()}</h2>}
      <ul className={css.statList}>
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
