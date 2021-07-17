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
