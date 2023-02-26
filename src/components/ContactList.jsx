import { ContactItem } from './ContactItem';
export const ContactList = ({ data, onDeleteContact }) => {
  return (
    <div>
      <p className="text-xl mt-3">Contacts</p>
      <ul>
        {data.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteById={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};
