import "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
const users = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function App() {
  const [searchItem, setSearchItem] = useState("");
  const [contactArr, setContactArr] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    return savedContacts || users;
  });
  const [filteredContacts, setFilteredContacts] = useState(contactArr);

  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    setSearchItem(searchValue);

    const filteredItems = contactArr.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredContacts(filteredItems);
  };
  const addContacts = (newContact) => {
    const newContactWithId = {
      ...newContact,
      id: nanoid(),
    };
    const updatedContacts = [...contactArr, newContactWithId];
    setContactArr(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactArr));
  }, [contactArr]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox
        handleInputChange={handleInputChange}
        searchItem={searchItem}
      />
      <ContactList contactArr={filteredContacts} />
    </div>
  );
}

export default App;
