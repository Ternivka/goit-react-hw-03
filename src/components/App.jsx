import "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [contactArr, setContactArr] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts?.length ? savedContacts : [];
  });

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const deleteContacts = (id) => {
    setContactArr((prev) => prev.filter((item) => item.id !== id));
  };

  const addContacts = (newContact) => {
    const newContactWithId = {
      ...newContact,
      id: nanoid(),
    };
    setContactArr((prev) => [...prev, newContactWithId]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactArr));
  }, [contactArr]);

  const filteredContacts = contactArr.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox handleInputChange={handleInputChange} searchItem={searchItem} />
      <ContactList
        onDeleteContacts={deleteContacts}
        contactArr={filteredContacts}
      />
    </div>
  );
}

export default App;