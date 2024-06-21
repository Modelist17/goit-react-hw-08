import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import Loader from "../Loader/Loader";
import { selectPhonebookIsLoading } from "../../redux/contacts2/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log("ContactList ~ filteredContacts:", filteredContacts);

  const isLoading = useSelector(selectPhonebookIsLoading);

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contacts={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
