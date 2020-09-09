import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(note => <Note key={note.key} title={note.title} content={note.content} />)}
            <Footer />
        </div>
    );
};

export default App;
