import type { Contact } from "../../data/contacts";

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
  return (
    <section className="team-list" aria-label="Team members">
      {contacts.map((contact) => {
        const isActive = selectedContact.id === contact.id;

        return (
          <button
            key={contact.id}
            className={`team-pill ${isActive ? "is-active" : ""}`}
            onClick={() => onSelectContact(contact)}
            type="button"
          >
            <img src={contact.image} alt="" />
            <span>{contact.name}</span>
          </button>
        );
      })}
    </section>
  );
}

export default TeamList;