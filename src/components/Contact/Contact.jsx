import s from "./Contact.module.css";
import { IoPerson, IoCall } from "react-icons/io5";

const Contact = ({ name, number, id }) => {
  return (
    <li key={id} className={s.item}>
      <div>
        <p>
          <IoPerson size={20} className={s.icon} />
          {name}
        </p>
        <p>
          <IoCall size={20} className={s.icon} />
          {number}
        </p>
      </div>

      <button>Delete</button>
    </li>
  );
};
export default Contact;
