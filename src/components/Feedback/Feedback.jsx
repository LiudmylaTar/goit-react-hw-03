import css from './Feedback.module.css';
export default function Feedback({ votes, positive }) {
  return (
    <ul className={css.list}>
      <li>Good: {votes.good}</li>
      <li>Neutral: {votes.neutral}</li>
      <li>Bad: {votes.bad}</li>
      <li className={css.positive}> Positive: {positive}%</li>
    </ul>
  );
}
