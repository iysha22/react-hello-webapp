import { useContacts } from "../context/ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <div className="list">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
