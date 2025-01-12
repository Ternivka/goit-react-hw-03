import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contactArr }) => {
  return (
    <div>
      <ul className={s.list}>
        {contactArr.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
