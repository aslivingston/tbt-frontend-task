import { useState } from "react";
import { contacts, type Contact } from "../../data/contacts";
import TeamList from "../../components/teamList/teamList";
import ContactCard from "../../components/contactCard/contactCard";

function Team() {
  const [selectedContact, setSelectedContact] = useState<Contact>(contacts[0]);

  return (
    <main className="team-page">
      <section className="team-hero">
        <p className="eyebrow">Team directory</p>

        <h1>Meet Our Team of Experts</h1>

        <p className="intro">
          Select a team member to view their contact details.
        </p>
      </section>

      <TeamList
        contacts={contacts}
        selectedContact={selectedContact}
        onSelectContact={setSelectedContact}
      />

      <ContactCard contact={selectedContact} />
    </main>
  );
}

export default Team;