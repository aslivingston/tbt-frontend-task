import { useEffect, useRef, useState } from "react";
import type { Contact } from "../../data/contacts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

type TeamSliderProps = {contacts: Contact[]; };

function TeamSlider({ contacts }: TeamSliderProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const [selectedId, setSelectedId] = useState<number | "">("");
    const [autoplayStopped, setAutoplayStopped] = useState(false);

    const handleSelect = (contactId: number) => {
        const index = contacts.findIndex((contact) => contact.id === contactId);

        setSelectedId(contactId);
        setAutoplayStopped(true);

        swiperRef.current?.autoplay?.stop();
        swiperRef.current?.slideToLoop(index);
    };

    const clearSelection = () => {
        setSelectedId("");
        setAutoplayStopped(false);

        swiperRef.current?.autoplay?.start();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
            clearSelection();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <section className="team-slider-section">
            <div className="team-controls">
                <div className="team-controls-left">
                    <label htmlFor="team-member" className="sr-only">Team Member</label>
                    <div className="select-wrap">
                        <select
                            id="team-member"
                            value={selectedId}
                            onChange={(event) => handleSelect(Number(event.target.value))}
                        >
                            <option value="" disabled>
                                Select a team member
                            </option>

                            {contacts.map((contact) => (
                                <option key={contact.id} value={contact.id}>
                                    {contact.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {autoplayStopped && (
                        <button className="clear-selection" type="button" onClick={clearSelection} aria-label="Clear selected team member">
                            X
                        </button>
                    )}
                </div>

                <div className="team-controls-right">
                    <button className="team-prev" type="button" aria-label="Previous team member" >
                        ←
                    </button>

                    <button className="team-next" type="button" aria-label="Next team member">
                        →
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Navigation]}
                loop
                spaceBetween={24}
                navigation={{prevEl: ".team-prev", nextEl: ".team-next",}}
                autoplay={{delay: 3000, disableOnInteraction: false,}}
                breakpoints={{
                    0: {slidesPerView: 1,},
                    575: {slidesPerView: 2,},
                    1024: {slidesPerView: 3,},
                }}
                onSwiper={(swiper) => {swiperRef.current = swiper;}}
                className="team-slider"
            >
                {contacts.map((contact) => (
                    <SwiperSlide key={contact.id} className={`team-slide ${selectedId === contact.id ? "is-active" : "" }`} >
                        <article
                            className="team-card"
                            onClick={() => handleSelect(contact.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === "Escape" && selectedId !== "") {
                                    clearSelection();
                                }
                            }}
                        >
                            <div className="card-image-wrap">
                                <img src={contact.image} alt={contact.name} />

                                <div className="card-header">
                                    <h2>{contact.name}</h2>
                                    <p>{contact.role}</p>

                                    <div className="team-card-details">
                                        <a
                                        href={`mailto:${contact.email}`}
                                        onClick={(event) => event.stopPropagation()}
                                        >
                                        {contact.email}
                                        </a>

                                        <a
                                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                        onClick={(event) => event.stopPropagation()}
                                        >
                                        {contact.phone}
                                        </a>

                                        <p>{contact.address}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default TeamSlider;
