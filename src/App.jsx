import { useEffect, useMemo, useState } from "react";
import "./App.css";

//my list of contacts
const myContacts = [
    {
        id: 1,
        name: "Meowlificent",
        phone: "(111) 111-1111",
        email: "meow@cat.com",
        photo: "src/images/contact-photos/cat.png",
    },
    {
        id: 2,
        name: "Slotherin",
        phone: "(222) 222-2222",
        email: "slotherin@sloth.com",
        photo: "src/images/contact-photos/sloth.png",
    },
    {
        id: 3,
        name: "Miss Piggy",
        phone: "(333) 333-3333",
        email: "miss.piggy@oink.com",
        photo: "src/images/contact-photos/pig.png",
    },
    {
        id: 4,
        name: "Frog",
        phone: "(444) 444-4444",
        email: "frog@ribbit.com",
        photo: "src/images/contact-photos/frog.png",
    },
    {
        id: 5,
        name: "Happy Feet",
        phone: "(555) 555-5555",
        email: "happy@penguin.com",
        photo: "src/images/contact-photos/penguin.png",
    },
    {
        id: 6,
        name: "Fried Chicken",
        phone: "(666) 666-6666",
        email: "fried@chicken.com",
        photo: "src/images/contact-photos/chicken.png",
    },
    {
        id: 7,
        name: "Ninja Turtle",
        phone: "(777) 777-7777",
        email: "ninja@turtle.com",
        photo: "src/images/contact-photos/turtle.png",
    },
    {
        id: 8,
        name: "Mister Krabs",
        phone: "(888) 888-8888",
        email: "krusty@krabs.com",
        photo: "src/images/contact-photos/crab.png",
    },
    {
        id: 9,
        name: "Dumbo",
        phone: "(999) 999-9999",
        email: "dumbo@elephant.com",
        photo: "src/images/contact-photos/elephant.png",
    },
    {
        id: 10,
        name: "Bah Bah",
        phone: "(101) 010-1010",
        email: "notsoblack@sheep.com",
        photo: "src/images/contact-photos/sheep.png",
    },
]

const App = () => {
    const [contacts, setContacts] = useState(myContacts);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const currentContact = myContacts[currentPage];

    useEffect(() => {}, []);

    const [query, setQuery] = useState("");

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <div className="heading">
                    <img src="src/images/phone.png" alt="logo image"></img> 
                    <h1 className="page__title">a bueno phonebook ⋆˚౨ৎ ⋆.˚</h1>
                </div>
                <p className="page__subtitle">a collection of connections</p>
            </header>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading">⤷ ゛ ˎˊ˗ search contacts</h2>
                <div className="search__controls">
                    <label htmlFor="search-input">search</label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="search by name or phone"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                    />
                </div>
                
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">contacts</h2>

                {/* example from class */}
                {/* <div className="contacts__grid">
                    {myContacts.map((Contact) => {
                        return (
                            <Contact
                                email={contact.email}
                                photo={contact.photo}
                                name={contact.name}
                            />
                            );
                        }
                    )}
                </div> */}
            {/* <div className="contacts-list"> */}

            {/* trying to add post-it note as the background for each of the contact cards
            <img className="note-bg" src="/images/post-it.png" alt="post it note background" /> */}

            {/* {myContacts.map((c, idx) =>(

                <div key={idx} className="contact-card">
                        <img src={c.photo} alt={c.name} />
                        <h2 className="contact-card-name">{c.name}</h2>
                        <p className="contact-card-phone">📞 {c.phone}</p>
                        <p className="contact-card-email">꒰ ✉︎ ꒱ {c.email}</p>
                
                </div>
                ))} */}
            {/* </div> */}
            <div className="contact-wrapper">
                <img className="note-bg" src="src/images/post-it.png" alt="post it note background" />
            {currentContact && (

                <div className="contact-card">
                    <img src={currentContact.photo} alt={currentContact.name} />
                    <h2 className="contact-card-name">{currentContact.name}</h2>
                    <p className="contact-card-phone">📞 {currentContact.phone}</p>
                    <p className="contact-card-email">꒰ ✉︎ ꒱ {currentContact.email}</p>
                </div>
            )}

            </div>

            <div className="pagination">
                <button className="pagination-btn" onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 0}>
                    BACK
                </button>
                <span>
                    {currentPage + 1} / {contacts.length}
                </span>
                <button className="pagination-btn" onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === contacts.length - 1}>
                    NEXT
                </button>
            </div>

            
        {/* results counter */}
            <div>
                <p className="search__results" data-testid="results-count">
                        Showing {contacts.length}{" "}
                        {contacts.length === 1 ? "result" : "results"}
                        {loading ? " (loading...)" : ""}
                        {error ? ` (error: ${error})` : ""}    
                </p>
            </div>

            </section>

            <section className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">. ₊˚ ☎︎₊˚✧  add a contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">name</label>
                        <input
                            id="name"
                            name="name"
                            placeholder="enter name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">phone</label>
                        <input
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            placeholder="(555) 555-5555"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="enter a valid email address"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="form__actions">
                        <button className="btn" type="submit" data-testid="btn-add">
                            add contact
                        </button>
                    </div>
                </form>
            </section>

            <footer className="page__footer">
                <p className="footer__border">────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────୨ৎ────────</p>
                <small>
                    &copy; 2025, all rights reserved.
                </small>
            </footer>
        </main>
    );
};

export default App;
