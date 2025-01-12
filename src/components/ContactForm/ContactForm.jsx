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
        <Form className={s.divClass}>
          <label>
            <span>Name</span>
            <Field type="text" name="name" id="name" />
          </label>
          <label>
            <span>Number</span>
            <Field type="tel" name="number" id="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
