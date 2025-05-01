import css from './Contact.module.css';
import { ImMobile } from 'react-icons/im';
import { IoPerson } from 'react-icons/io5';
export default function Contact({ data, onDelete }) {
  return (
    <>
      <div className={css.contact}>
        <div className={css.wrapper}>
          <span className={css.icon}>
            <IoPerson size="16" />
          </span>
          <p>{data.name}</p>
        </div>
        <div className={css.wrapper}>
          <span className={css.icon}>
            <ImMobile size="16" />
          </span>
          <p>{data.number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </>
  );
}
