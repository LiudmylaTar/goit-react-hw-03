import css from './SearchBox.module.css';

export default function SearchBox() {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input type="text" />
    </div>
  );
}
