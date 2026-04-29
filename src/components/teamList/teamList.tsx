import type { Contact } from "../../data/contacts";
import "./teamlist.less";

type TeamListProps = {
  contacts: Contact[];
  selectedContact: Contact;
  onSelectContact: (contact: Contact) => void;
};

function TeamList({
  contacts,
  selectedContact,
  onSelectContact,
}: TeamListProps) {

  const loopedContacts = [...contacts, ...contacts];

  const renderRow = (rowClass: string) => (
    <div className={`team-row ${rowClass}`}>
      {loopedContacts.map((contact, index) => {
        const isActive = selectedContact.id === contact.id;

        return (
          <button
            key={`${rowClass}-${contact.id}-${index}`}
            className={`team-pill ${isActive ? "is-active" : ""}`}
            onClick={() => onSelectContact(contact)}
            type="button"
          >
            <img src={contact.image} alt="" />
            <span>{contact.name}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <section className="team-list" aria-label="Team members">
      {renderRow("row-1")}
      {renderRow("row-2")}
      {renderRow("row-3")}
    </section>
  );
}

export default TeamList;