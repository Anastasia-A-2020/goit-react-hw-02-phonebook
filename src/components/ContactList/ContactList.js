import PropTypes from "prop-types";
import s from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.li}>
          {name}: {number}
        </li>
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
