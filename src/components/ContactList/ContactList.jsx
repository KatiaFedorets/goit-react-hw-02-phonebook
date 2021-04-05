const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}: </span>
        <span>{contact.number}</span>
        <button type="button" onClick={() => onDeleteContacts(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
