import css from './Options.module.css';

export default function Options({ onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.option_btn}>
      <button className={css.btn} onClick={() => onLeaveFeedback('good')}>
        Good 😊
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>
        Neutral 😐
      </button>
      <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>
        Bad 😒
      </button>
      {totalFeedback > 0 && (
        <button className={css.reset_btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
