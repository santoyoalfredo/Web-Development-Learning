import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(title, content) {

        setNotes(prevNotes => {
            return [
                ...prevNotes,
                { title: title, content: content }]
        })
        console.log(notes);
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    index={index}
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
