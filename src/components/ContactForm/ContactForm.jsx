import { Field, Form, Formik } from "formik";
import s from "./ContactFrom.module.css";

const ContactForm = ({ addContacts }) => {
  const handleSubmit = (values, actions) => {
    addContacts(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={{ name: "", number: "" }}>
        <Form className={s.container}>
          <label>
            <span>Name</span>
            <Field type="text" name="name" id="name" className={s.username} />
          </label>
          <label>
            <span>Number</span>
            <Field type="tel" name="number" id="number" className={s.number} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
