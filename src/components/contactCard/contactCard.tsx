import type { Contact } from "../../data/contacts";


type ContactCardProps = {
  contact: Contact;
};

function ContactCard({ contact }: ContactCardProps) {
  return (
    <section className="contact-card" aria-label={`${contact.name} contact card`}>
      <img src={contact.image} alt={contact.name} className="contact-avatar" />

      <div>
        <p className="contact-role">{contact.role}</p>
        <h2>{contact.name}</h2>

        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>

          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
            </dd>
          </div>

          <div>
            <dt>Address</dt>
            <dd>{contact.address}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default ContactCard;