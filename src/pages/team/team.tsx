import TeamSlider from "../../components/teamSlider/teamSlider";
import { contacts } from "../../data/contacts";

function Team() {
    return (
        <main className="team-page page-enter">
            <section className="team-hero hero-enter">
                <h2 className="eyebrow">Team directory</h2>
                <h1>Meet the people behind the work</h1>
                <p>Select a team member or browse the slider.</p>
            </section>

            <TeamSlider contacts={contacts} />
        </main>
    );
}

export default Team;